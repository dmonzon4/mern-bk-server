const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Referencia al modelo de Usuario
      required: true,
    },
    area_reserved: {
      type: Schema.Types.ObjectId,
      ref: 'Area', // Referencia al modelo de Área del Restaurante
      required: true,
    },
    date_time: {
      type: Date,
      required: true,
    },
	time: {
      type: String, 
      required: true,
    },
    number_of_people: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;