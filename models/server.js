const express = require('express');

const persons =[
    {
        id:1,
        name:"Arto Hellas",
        number:"040-123456"
    },
    {
        id:2,
        name:"Ada Lovelace",
        number:"39-44-5323523"
    },
    {
        id:3,
        name:"Dan Abramov",
        number: "12-43-234345"
    },
    {
        id:4,
        name:"Mary Poppendick",
        number:"39-23-6423122"
    }
]


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.routes();
    }

    routes(){
        
        this.app.get('/', (req,res)=>{
            res.send("Hola, esta es la ruta inicial, ingrese a api/persons");
        })

        this.app.get('/api/persons', (req,res)=>{
            res.json(persons);
        })
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en el puerto: ", this.port);
        });
    }

}

module.exports = Server;