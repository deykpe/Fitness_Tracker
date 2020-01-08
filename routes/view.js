const router = require ('express').Router()
const db = require ('../models/workout1.js')
const path = require ('path')

router.get('/exercise', function (request, response){

    response.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', function (request, response){

    response.sendFile(path.join(__dirname, '../public/stats.html'))
});

router.get('/', function (request, response){

    response.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;
