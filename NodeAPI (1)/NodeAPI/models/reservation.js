
const mongoose= require('mongoose');

const reservationSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    trajetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trajet',
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled'],
      default: 'Pending'
    }
    // Other reservation properties, if needed
  });
  
  const Reservation = mongoose.model('Reservation', reservationSchema);
  
  module.exports = Reservation;
  
  
  