const express = require('express')

const Games = require('../models/games')

const router = express.Router();

//rota para teste.
router.get('/ping', async (req, res) => {
    try {
        const pong = await ('pong  dadad funcionou')
        return res.send(pong)
    }
    catch (err){
        console.log(err);
        return res.status(5000).send({error: 'Page not Found'})
        
    }
})

router.get('/game', async (req, res) => {
    try {
        const games = await Games.find(req.body);
        return res.status(200).send(games);
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Consult failed'});
    }
});

router.get('/game/:id', async (req, res) => {
    try {
        const games = await Games.findById(req.params.id);
        return res.status(200).send (games);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Register Not Found'); 
    }
})

router.post('/game', async (req, res) => {
    try {
        const games = await Games.create(req.body);
        return res.status(200).send (games);
    } catch (err){
        console.log(err);
        return res.status(400).send('Registration Failed');
    }
})

router.put('/game/:id', async (req, res) => {
    try {        
        const games = await Games.findById(req.params.id)
        let dataAlteracao = Date.now()
    
        games.name = req.body.name;
        games.descricao = req.body.descricao;
        games.genero = req.body.genero;
        games.companhia = req.body.companhia;
        games.dataAlteracao = dataAlteracao;

        await games.save();
        return res.status(200).send(games);
    } catch (err) {
        console.log(err); 
        return res.status(400).send('Games validation failed')
    }
})

router.delete('/game/:id', async (req, res) => {
    try {
        const games = await Games.findByIdAndDelete(req.params.id)
        return res.status(200).send('Register Delete');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
})

module.exports = app => app.use('/v1', router)