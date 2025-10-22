const express = require('express');
const router = express.Router();
const { getNotes, createNote, editNote, deleteNote } = require('../controllers/noteController');

router.post('/', getNotes); 
router.post('/create', createNote);
router.put('/:id', editNote);
router.delete('/:id', deleteNote);

module.exports = router;
