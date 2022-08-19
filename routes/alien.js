const express = require('express');
const router = express.Router();
const alienSchema = require('../models/alien')

router.get('/', async(req,res) => {
    try{
        const alien = await alienSchema.find()
        res.json(alien)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const alien = await alienSchema.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const alien = await alienSchema.findById(req.params.id)
        alien.age = req.body.age
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const alien = await alienSchema.findById(req.params.id)
        const a1 = await alien.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const alien = new alienSchema({
        name: req.body.name,
        age: req.body.age,
        mobile: req.body.mobile
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error from post' + err)
    }
})

module.exports = router