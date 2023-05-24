const mongoose= require('mongoose')



const trajetSchema = new mongoose.Schema({
  heureDepart: {
    type: String,
    required: true
  },
  lieuDepart: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  placesDisponibles: {
    type: Number,
    required: true
  },
  
});

const Trajet = mongoose.model('Trajet', trajetSchema);

module.exports = Trajet;





