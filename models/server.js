//const express = require('express');
import express from 'express';
//const bodyParser = require('body-parser')
import bodyParser from 'body-parser';

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


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


class Server{
    //var jsonParser = bodyParser.json()
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.jsonParser = bodyParser.json();
        this.routes();
    }

    routes(){

        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        
        this.app.get('/', (req,res)=>{
            res.send("Hola, esta es la ruta inicial, ingrese a api/persons");
        })

        this.app.get('/api/persons', (req,res)=>{
            res.json(persons);
        })

        this.app.get('/info', (req,res)=>{
            var datetime = new Date();
            console.log(datetime);
            res.send(`Phoneboook has info for  ${persons.length} people <br/> ${datetime}`)
        })

        this.app.get('/api/persons/:id', (req,res)=>{

            const id = req.params.id;
            const person = persons.filter(person => person.id == id)
            if(person.length>0){
                res.json(person);
            }else{
                res.sendStatus( 404 );
            }                        
        })

        this.app.delete('/api/persons/:id', (req,res)=>{

            const id = req.params.id;
            const people = persons.filter(person => person.id != id)
            res.json(people);
                                        
        })

        this.app.post('/api/persons', (req,res)=>{
            const {name, number } = req.body;
            const id = getRandomArbitrary(1,100);

            //Validar existencia de nombre y número
            if(name === undefined || number === undefined){
                return res.status(400).json({
                    error:`Debe ingresar el nombre y número del contacto`
                })
            }
            
            //Validar existencia del nombre del usuario
            const resultado = persons.find( persona => persona.name === name );
            if(resultado){
                return res.status(400).json({
                    error:`El nombre ${name} ya está registrado`
                })
            }
            const newPerson = {
                id,
                name,
                number
            }
            res.json({
                msg: "Inserción exitosa",
                id,
                name, 
                number
            })

            persons.push(newPerson);
        })


    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en el puerto: ", this.port);
        });
    }

}

//module.exports = Server;
export default Server;