const mongoose=require('mongoose');

const trajetSchema = new mongoose.Schema({
    heureDepart: String,
    lieuDepart: String,
    destination: String,
    placesDisponibles: Number,
  });

  const Trajet = mongoose.model('Trajet', trajetSchema);

  module.exports= Trajet;