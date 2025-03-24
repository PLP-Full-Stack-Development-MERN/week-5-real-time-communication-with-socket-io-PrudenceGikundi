import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './components/Room';
import Editor from './components/Editor';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Room />} />
                <Route path="/room/:room" element={<Editor />} />
            </Routes>
        </Router>
    );
}

export default App;
