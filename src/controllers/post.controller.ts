//import modules
import { postServices } from '../services/post.service'
import { Request, Response } from 'express'
import { PostschemaValidate } from '../models/posts'
import { Get, Route } from 'tsoa'

@Route("post")
class postController {
    
    @Get("/")

    //add post controller
    addpost = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            text: req.body.text,
            url: req.body.url,
            hashtags: req.body.hashtags,
            via: req.body.via,
            related: req.body.related
        }
        //validating the request
        const {error, value} = PostschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const post = await postServices.createPost(value)
            res.status(201).send(post)          
        }
        
    }

    //get all posts
    getPosts = async (req: Request, res: Response) => {
        const posts = await postServices.getPosts()
        res.send(posts)
    }

    //get a single post
    getSinglePost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const post = await postServices.getPost(id)
        res.send(post)
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id
       const post = await postServices.updatePost(id, req.body)  
        res.send(post)
    }

    //delete a post
    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id
        await postServices.deletePost(id)
        res.send('post deleted')
    }
}

//export class
export const PostController = new postController()