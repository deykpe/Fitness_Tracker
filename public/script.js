$.ajax({
    type:'GET',
    url:'/api/workouts'
}).then(function(res){
   console.log(res);
   for(let i=0;i<res.length;i++){
       $("#records").append(`<div><h1>${res[i].workoutname}</h1><ol>`);
       for(let j=0;j<exercise.length;j++){
           $("#records").append(`<li>${res[i].exercise[j].exercisename} :  ${res[i].exercise[j].numberofreps}`);
       }
       $("#records").append(`</ol></div>`);
   }
}).catch((error) =>{
    console.log("Error in fetching records",error)
});

$('#save').on('click', function (e){
    e.preventDefault()
    var data = {
        workoutname: $('#workoutname').val()
        // exercise: [{
        //     exercisename: $('#exercisename').val(),
        //     numberofreps: $('#numberofreps').val()
        // }]
    }
        console.log(data)
    $.ajax({
        type: 'POST',
        url: '/api/workouts',
        data: data,
        success: function(data) {
            console.log(data)
            $('#hi').append(`<p>workoutname-${data.workoutname}</p> <p>id:${data._id}</p>`)
            $('#after').append(`workout:${data.workoutname}`)
            $('#new').attr('data-id', data._id)
        }
    })
});

$('#new').on('click', function (e){
    e.preventDefault()
    var data = {
            exercisename: $('#exercisename').val(),
            numberofreps: $('#reps').val()
    }
        console.log(data)
    var id = $(this).attr('data-id')
    console.log(id)
    $.ajax({
        type: 'PUT',
        url: '/api/addexercise/' + id,
        data: data,
        success: function(data) {
            console.log(data)
            window.location.reload();
            // $('#after')(`workout:${data.workoutname}`)
        }
    })
});