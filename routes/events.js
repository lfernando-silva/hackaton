const express = require('express');
const router = express.Router();

const {events} = require('../db')

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const event = await events.findById(id);
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const event = await events.remove(id);
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const {lat, long, date, crime} = req.body;
        const event = await events.insert({lat, long, date, crime});
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {lat, long, date, crime} = req.body;
        const event = await events.update(id, {lat, long, date, crime});
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const event = await events.findAll();
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

module.exports = router;