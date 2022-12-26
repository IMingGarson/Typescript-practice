const express = require('express');
const router = express.Router()

router.get('/web', function (req, res) {
    /* 	#swagger.tags = ['WEB']
        #swagger.description = 'Web Routes Document.' 
    */
    /* #swagger.responses[200] = { 
        description: "Hello World Web." } 
    */
    res.status(200).json({
        code: 200,
        message: 'Hello World Web.',
        data: [],
    });
});

module.exports = router;