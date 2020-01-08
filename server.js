var express = require ('express');
var mongoose = require ('mongoose');

var port = 8080

var app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser:true, 
    useFindAndModify:false
})

app.use(require('./routes/api.js'))
app.use(require('./routes/view.js'))



app.listen(port, function() {
console.log('port is working on 8080')
})

