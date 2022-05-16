import { Schema, model} from 'mongoose'

 const dataSchema = new Schema({
    
entity: {
    type: String,
    required: true,
    trim:true
},

date: {
    type: String,
    required: true,
    trim:true
},
status:{
    type: String,
    required: true,
    trim:true
},
step:{
    type: String,
    required: true,
    trim:true
},
status_date:{
    type: String,
    required: true,
    trim:true
}
},
{
    versionKey:false,
    timestamps:true
});

export default model('Data', dataSchema)