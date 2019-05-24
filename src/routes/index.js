const express = require("express");
const router = express.Router();
const Task = require("../models/task");

//Find all
router.get("/clientes", (req, res) => {
    
    Task.find()
    .then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {
        return res.status(400).send({mensajeProgramador: err, mensajeUsuario: "Ha ocurrido un error."});
    });

});


//Find by id
router.get("/clientes/:id", (req, res) => {
    
    var id = req.params.id;

    Task.findOne({id: id})
    .then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {
        return res.status(400).send({mensajeProgramador: err, mensajeUsuario: "Ha ocurrido un error."});
    });

});


//Insert
router.post("/clientes/insert", (req, res) => {

    console.log("BODY", req.params);
    const task = new Task(req.body);
    
    task.save()
    .then((response) => {
        console.log("ANSWER SAVE", response);
        return res.status(200).send({mensajeUsuario: response});

    })
    .catch((err) => {
        console.log("ANSWER ERROR", err);
        return res.status(400).send({mensajeUsuario: err, mensajeProgramador: err});
    });

    
});

//Update
router.put("/clientes/:id", (req, res) => {

    var id = req.params.id;

    console.log(req.body);

    Task.updateOne({id: id}, req.body)
    .then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {
        return res.status(400).send({mensajeUsuario: err, mensajeProgramador: err});
    });

});


//Delete
router.delete("/clientes/:id", (req, res) => {

    var id = req.params.id;

    Task.deleteOne({id: id})
    .then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {
        return res.status(400).send({mensajeUsuario: err, mensajeProgramador: err});
    });

});

module.exports = router;