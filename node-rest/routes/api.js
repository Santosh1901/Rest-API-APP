const express = require('express')
const router = express.Router()

let items = []

router.get('/items',(req,res) => {
    res.json(items)
})

router.post('/items',(req,res) =>{
    const newItem = req.body
    items.push(newItem)
    res.status(201).json(newItem)
})

router.get('/items/:id',(req,res) => {
    const item = items.find(i => i.id === parseInt(req.params.id))
    if(!item) res.status(404).send('Item not found')
    res.json(item)
})

router.delete('/items/:id',(req,res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id))
    res.status(204).send()
})

module.exports = router