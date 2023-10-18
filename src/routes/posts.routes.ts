//importing modules
import express from "express";
import { PostController } from '../controllers/post.controller'

//initiating the router
export const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Post
 *   description: CRUD operation for posts (tweets) feature from X (formerly Twitter)
 */

//add post route
router.post('/',PostController.addpost)

//get posts
router.get('/', PostController.getPosts)

//get single post
router.get('/:id', PostController.getSinglePost)

//update a post
router.put('/:id', PostController.updatePost)

//delete a post
router.delete('/:id', PostController.deletePost)