const express = require('express');
const router = express.Router()
const authorize = require('../src/middlewares/auth');

router.get('/api/web', authorize, function (req, res) {
    /* 	#swagger.tags = ['TEST']
        #swagger.description = 'TEST API Endpoint Document.' 
    */
    /* #swagger.responses[200] = { 
        description: "Hello World API." } 
    */
    res.status(200).json({
        code: 200,
        message: 'Hello World API.',
        data: [],
    });
});

module.exports = router;