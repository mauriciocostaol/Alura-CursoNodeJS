import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {
        id: 1,
        "titulo": "Senhor dos anéis"
    },
    {
        id: 2,
        "titulo": "Hobbit"
    }
]
app.get("/", (request, response) => {

    response.status(200).send("Curso de Node")

})


app.get("/livros", (request, response) => {
    response.status(200).json(livros);
})

app.post('/livros',(request,response)=>{

    livros.push(request.body);

    response.status(201).send("Livro Cadastrado com Sucesso!!!");
})

export default  app