
import express from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path';

router.post('/status', (req, res) => {
    res.status(200).json(
        {
            message: "Server van hoat dong tot"
        }
    )
})

let studentLists = [
    {
        "id": "1",
        "name": "Tai"
    }
]

router.get('/status', (req, res) => {
    // res.redirect('https://www.google.com/')
    // res.statusMessage = 'ok'
    res.status(200).json(
        {
            message: "Lay data thanh cong",
            data: studentLists

        }
    )
})


module.exports = router;