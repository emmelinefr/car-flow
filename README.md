# 🚗 Car Flow

**API de gerenciamento de carros desenvolvida com JavaScript, Node.js e Express.**

O Car Flow é um projeto de gerenciamento de carros que tem como objetivo praticar o desenvolvimento de APIs RESTful, a implementação de operações CRUD e a integração com bancos de dados.

O backend será responsável pelas operações de criação, consulta, atualização e exclusão de carros, utilizando o MongoDB para persistência dos dados. O frontend será desenvolvido com React, HTML, CSS e JavaScript.

## 🛠️ Tecnologias

### Backend
- **JavaScript**
- **Node.js**
- **Express.js** 
- **MongoDB** 

### Frontend — Planejado
- **React** 
- **HTML5** 
- **CSS3** 
- **JavaScript** 

## ✨ Funcionalidades

- **Cadastrar carros** 
- **Listar carros** 
- **Buscar carro por ID**
- **Atualizar carros:** PUT e PATCH
- **Excluir carros POR ID** 
- **Validar requisições:** verificar dados recebidos e tratar erros.

## 📌 Endpoints da API

URL base: `http://localhost:3000`

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| `GET` | `/carros` | Listar todos os carros |
| `GET` | `/carros/:id` | Buscar um carro pelo ID |
| `POST` | `/carros` | Cadastrar um novo carro |
| `PUT` | `/carros/:id` | Substituir os dados de um carro |
| `PATCH` | `/carros/:id` | Atualizar parcialmente um carro |
| `DELETE` | `/carros/:id` | Excluir um carro |


## ⚙️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/) local ou uma instância no MongoDB Atlas.

### 1. Clone o repositório

```bash
git clone https://github.com/emmelinefr/car-flow.git
```

### 2. Acesse a pasta do projeto

```bash
cd car-flow
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` a partir do modelo disponibilizado:

```bash
cp .env.example .env
```

Configure as variáveis no arquivo `.env`:

```env
PORT=3000
DATABASE_URI=sua_uri_de_conexao
```

Substitua `sua_uri_de_conexao` pela URI do seu banco de dados MongoDB.

Para uma instância local, por exemplo:

```env
DATABASE_URI=mongodb://localhost:27017/car_flow
```

**Importante:** o arquivo `.env` contém configurações privadas e não deve ser enviado ao GitHub. O arquivo `.env.example` deve ser versionado sem credenciais reais.

### 5. Inicie a aplicação

Se o script `start` estiver configurado no `package.json`:

```bash
npm run dev
```

Caso ainda não esteja configurado, execute o arquivo de entrada diretamente:

```bash
node src/index.js
```

### 6. Teste a API

Utilize o [Postman](https://www.postman.com/) ou outra ferramenta de requisições HTTP para testar os endpoints.

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para separar as configurações da aplicação do código-fonte.

| Variável | Descrição |
|---|---|
| `PORT` | Porta em que o servidor será executado. |
| `DATABASE_URI` | URI de conexão com o banco de dados MongoDB. |

O arquivo `.env.example` serve como modelo para que outros desenvolvedores configurem suas próprias variáveis ao executar o projeto.

## 📂 Status do projeto

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido por etapas, começando pelas operações CRUD do backend. A integração com o MongoDB e a construção da interface com React fazem parte da evolução da aplicação.

## 🎯 Objetivos de aprendizagem

- Desenvolver APIs RESTful com Node.js e Express.js.
- Compreender os métodos HTTP e os códigos de status.
- Trabalhar com parâmetros de rota, requisições e respostas HTTP.
- Implementar operações CRUD e validação de dados.
- Integrar uma API com o MongoDB.
- Gerenciar configurações utilizando variáveis de ambiente.
- Desenvolver uma interface com React para consumir a API.
- Praticar conceitos de desenvolvimento full stack.

## 👩🏻‍💻 Autora

**Alexandra Emmeline**

[GitHub](https://github.com/emmelinefr)
