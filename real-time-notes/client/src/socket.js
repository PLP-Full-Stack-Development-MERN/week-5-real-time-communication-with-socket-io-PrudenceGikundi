import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Change this to your backend URL on Render

export default socket;
