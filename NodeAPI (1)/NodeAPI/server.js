const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Trajet = require('./models/projectModels');

// Middleware
app.use(bodyParser.json());

// Create a Trajet model


// Routes
app.get('/home', (req, res) => {
  res.send('Hello');
});

app.get('/trajets', async (req, res) => {
  try {
    const trajets = await Trajet.find({});
    res.status(200).json(trajets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/trajets', async (req, res) => {
  console.log(req.body);
  const {heureDepart,lieuDepart,destination,placesDisponibles} = req.body;
  const trajet = new Trajet({heureDepart,lieuDepart,destination,placesDisponibles});
 await  trajet
    .save()
    .then(() => {
      res.status(201).json(trajet);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

app.get('/trajets/:id', async (req, res) => {
  try {
    const trajet = await Trajet.findById(req.params.id);
    if (trajet) {
      res.status(200).json(trajet);
    } else {
      res.status(404).json({ message: 'Trajet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/trajets/:id', async (req, res) => {
  try {
    const trajet = await Trajet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (trajet) {
      res.status(200).json(trajet);
    } else {
      res.status(404).json({ message: 'Trajet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://admin:azerty@cluster.xphuh6w.mongodb.net/node-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Node API app is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
