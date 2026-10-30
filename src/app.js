import express from 'express';

const app = express();
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


app.get('/carros/:id', (req, res) => {

    const id = Number(req.params.id);

    const carro = carros.find(carro => carro.id === id);

    if (!carro) {
        res.status(404)
            .json("Carro não encontrado!")
    }

    return res.status(200)
        .json(carro);

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


app.delete('/carros/:id', (req, res) => {

    const id = Number(req.params.id);

    const carroDeletar = carros.findIndex(carro => carro.id === id);

    if (carroDeletar === -1) {
        return res.status(404)
            .json({message: "Carro não encontrado."})
    }

    carros.splice(carroDeletar, 1);

    return res.status(200)
        .json({message: "Carro excluído com sucesso!"});

});


export default app;