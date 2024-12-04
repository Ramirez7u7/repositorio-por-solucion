import { Schema, model} from "mongoose";


const userSchema = new Schema({
    name:String,
    epepat:String,
    numero:Number
})

export const userModel = model("usuarios", userSchema)