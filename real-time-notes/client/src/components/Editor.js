import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import socket from '../socket';

const Editor = () => {
    const { room } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        socket.emit('joinRoom', room);

        axios.get(`http://localhost:5000/api/notes/${room}`)
            .then(res => setContent(res.data.content));

        socket.on('noteUpdated', (newContent) => {
            setContent(newContent);
        });

        return () => socket.off('noteUpdated');
    }, [room]);

    const handleChange = (e) => {
        setContent(e.target.value);
        socket.emit('updateNote', { room, content: e.target.value });
    };

    const saveNote = async () => {
        await axios.post(`http://localhost:5000/api/notes/${room}`, { content });
    };

    return (
        <div className="editor">
            <h2>Room: {room}</h2>
            <textarea value={content} onChange={handleChange} />
            <button onClick={saveNote}>Save</button>
        </div>
    );
};

export default Editor;
