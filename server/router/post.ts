import { Router } from "express"
import * as postController from '../controller/post'

export const createPostRouter = () => {
    const router = Router()
    router.get('/:id', postController.getPost)
    router.get('/', postController.getPosts)
    router.post('/', postController.createPost)
    return router
}

