import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Room = () => {
    const [room, setRoom] = useState('');
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room.trim()) {
            navigate(`/room/${room}`);
        }
    };

    return (
        <div className="container">
            <h2>Join a Room</h2>
            <input
                type="text"
                placeholder="Enter Room ID"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join</button>
        </div>
    );
};

export default Room;
