const { Router } = require('express')

const router = Router();

router.get('/', (req,res)=>{
    res.send("Hola, esta es la ruta inicial, ingrese a api/persons");
})

router.get('/', (req,res)=>{
    res.json(persons);
})

router.get('/info', (req,res)=>{
    var datetime = new Date();
    console.log(datetime);
    res.send(`Phoneboook has info for  ${persons.length} people <br/> ${datetime}`)
})

router.get('/api/persons/:id', (req,res)=>{
    res.json(persons);
})

module.exports = router;
