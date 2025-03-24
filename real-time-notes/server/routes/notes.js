const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Fetch notes by room
router.get('/:room', async (req, res) => {
    try {
        const note = await Note.findOne({ room: req.params.room });
        res.json(note || { room: req.params.room, content: '' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Save notes
router.post('/:room', async (req, res) => {
    try {
        let note = await Note.findOne({ room: req.params.room });
        if (note) {
            note.content = req.body.content;
            await note.save();
        } else {
            note = await Note.create({ room: req.params.room, content: req.body.content });
        }
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
