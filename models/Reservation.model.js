const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Referencia al modelo de Usuario
      required: true,
    },
    reservedArea: {
      type: Schema.Types.ObjectId,
      ref: 'Area', // Referencia al modelo de Área del Restaurante
      required: true,
    },
    reservationDate: {
      type: Date,
      required: true,
    },
	  reservationTime: {
      type: String, 
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// reservationSchema.index({ area_reserved: 1, reservationDate: 1, reservationTime: 1 }, { unique: true });

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;