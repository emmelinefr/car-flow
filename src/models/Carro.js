import mongoose from "mongoose";

const carroSchema = new mongoose.Schema({

    modelo: { type: String, required: true, trim: true },
    ano: { type: Number, required: true, min: 1886, max: new Date.getFullYear()},
    marca: { type: String, required: true, trim: true },
    preco: { type: Number, required: true, min: 0 }

}, {versionKey: false});

export default mongoose.Schema('Carro', carroSchema);

