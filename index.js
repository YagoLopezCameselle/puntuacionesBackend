let express = require('express')
let bodyParser = require('body-parser')
let app = express()
    //Preparo body para que pasa texto a json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send("Hola")
})

app.get('/puntuaciones/', (req, res) => {
    // TODO:leer la base de datos
    let datosJSON = {
        accion: 'get all',
        datos: [
            { nombre: 'Pepe', puntuacion: 33 },
            { nombre: 'Bea', puntuacion: 23 },
            { nombre: 'Felix', puntuacion: 44 }
        ]
    }
    res.status(200).send(datosJSON)
})

app.post('/puntuacion', (req, res) => {
    // TODO: insertar en la base de datos
    let datos = req.body
    let datosJsonRespuesta = {
        accion: 'save',
        datos: datos
    }
    res.status(200).send(datosJsonRespuesta)
})

app.delete('/puntuacion/:id', (req, res) => {
    let puntuacionId = req.params.id
    let datosJsonRespuesta = {
            accion: 'delete',
            datos: puntuacionId
        }
        // TODO: borrar de la base de datos el id
    res.status(200).send(datosJsonRespuesta)
})


app.listen(5200, () => {
    console.log("API REST funcionando en http://localhost:5200")
})