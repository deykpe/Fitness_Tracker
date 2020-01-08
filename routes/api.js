const router = require ('express').Router()
const db = require ('../models/workout1.js')

router.put('/api/addexercise/:id', function (request, response){
    console.log(request.params.id, request.body)
    db.findByIdAndUpdate(
         request.params.id,
     {$push:{exercises:request.body}},{new:true,runValidators:true})
     .then(function(records){
        console.log(records)
        response.json(records)
    })
    .catch( function (error){
        response.send(error)
    })
});

router.get('/api/workouts', function (request, response){
    db.find().then(function(records){
        response.json(records)
    })
    .catch( function (error) {
        response.send(error)
    })
});

router.post('/api/workouts', function (request, response){

    db.create((request.body)).then(function(records){
        console.log(records)
        response.json(records)
    })
    .catch( function (error){
        response.send(error)
    })
})

module.exports = router;