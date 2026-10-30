import app from "./app.js";
import conectarBancoDeDados from "./config/database.js";

const PORT = process.env.PORT;


async function iniciarServidor() {
    try {
        await conectarBancoDeDados();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em https://localhost:${PORT}`);
        });

    }catch (error) {
        console.log(error);
        process.exit(1);
    }
}

iniciarServidor();
