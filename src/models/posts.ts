//importing modules
import  { Schema, model } from 'mongoose'
import Joi from 'joi'

//validation schema
export const PostschemaValidate = Joi.object({
    text: Joi.string().required(),
    url: Joi.string(),
    hashtags: Joi.string(),
    via: Joi.string(),
    related: Joi.string(),
})

//creating an interface 
interface postInterface {
    text: string,
    url: string,
    hashtags: string,
    via: string,
    related: string
}

//Postschema
const postSchema = new Schema<postInterface>({
    text: {
        type: String,
        required: true
    },

    url: {
        type: String
    },

    hashtags: {
        type: String
    },

    via: {
        type: String
    },

    related: {
        type: String
    }
})

//creating a model
 export const Post = model<postInterface>('Post', postSchema )