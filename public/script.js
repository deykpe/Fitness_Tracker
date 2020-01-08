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

