const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const workout1schema = new Schema(
    {
        exercise: [
            {
                exercisename: {
                    type: String
                    // required: "enter exercise"   
                },
                
            numberofreps: {
                type: Number
                // required: "enter rep count" 
            }
            }
          ],

          workoutname: {
            type: String
            // required: "enter workoutname"   
        },
        day: {
            type: Date,
            default: Date.now 
        }
    }
);

const Workout1 = mongoose.model('Workout1', workout1schema)

module.exports = Workout1