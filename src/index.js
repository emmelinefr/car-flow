import express, {json} from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());


// banco de dados em memória
let carros = [
    {
        id: 1,
        modelo: "Gol",
        ano: 2010
    },
    {
        id: 2,
        modelo: "Civic",
        ano: 2018
    }
];
let proximoId = 2;



// ROTAS
app.get('/carros', (req, res) => {

    res.status(200)
        .json(carros);

});


app.post('/carros', (req, res) => {

    const {modelo, ano} = req.body;

    if (!modelo || !ano) {
        return res.status(400)
            .json({ message: "Modelo e ano são obrigatórios!"});
    }

    const novoCarro = {
        id: proximoId++,
        modelo,
        ano
    };

    carros.push(novoCarro);

    return res.status(201)
        .json(novoCarro);

});


app.put('/carros/:id', (req, res) => {

    const id = Number(req.params.id);

    const carroEditar = carros.find(carro => carro.id === id);

    if (!carroEditar) {
        return res.status(404)
            .json({message: "Carro não encontrado!"});
    }

    const {modelo, ano} = req.body;

    if (!modelo || !ano) {
        return res.status(400)
            .json({message: "Modelo e ano são obrigatórios!"})
    }

    Object.assign(carroEditar, {modelo, ano});

    return res.status(200)
        .json(carroEditar);

});


app.patch('/carros/:id', (req, res) => {

    const id = Number(req.params.id);

    const carroEditar = carros.find(carro => carro.id === id);

    if (!carroEditar) {
        return res.status(404)
            .json({message: "Carro não encontrado!"});
    }

    Object.assign(carroEditar, req.body);

    res.status(200)
        .json(carroEditar);

});



























app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
})