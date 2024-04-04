const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/notesdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const newSchema=mongoose.Schema({
    notes_title:String,
    notes_description:String
});

const Notes=mongoose.model('Notes',newSchema);
// Car = Notes
// Routes
app.get('/notes', async (req, res) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/notes', async (req, res) => {
  const { notes_title ,notes_description} = req.body;
  const notes = new Notes({ notes_title,notes_description});
  try {
    await notes.save();
    res.status(201).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNotes = await Notes.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedNotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Notes.findByIdAndDelete(id);
    res.status(200).send('Notes deleted successfully');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get('/availnotes', async (req, res) => {
  try {
    const notes = await Notes.find();

  //  console.log( notes);
   
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/notes/:notes_title', async (req, res) => {
  const { notes_title } = req.params;
  try {
    const matched = await Notes.find({ "notes_title": notes_title });

    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
