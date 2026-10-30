import mongoose from 'mongoose';

async function conectarBancoDeDados() {

    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("MongoDB conectado com sucesso!")

    } catch (error) {
        console.log("Erro ao conectar com MongoDB");
        process.exit(1);
    }

}

export default conectarBancoDeDados;