import { NextFunction, Request, Response } from "express"
import Post from "../model/post";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;
    try {
        const newPost = await Post.create({ title })
        console.log({ newPost, title })
        return res.status(201).json(newPost)
    } catch (error) {
        return next(error)
    }
}

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await Post.find({})
        return res.status(200).json(posts)
    } catch (error) {
        return next(error)
    }
}

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await Post.findById(req.params.id)
        return res.status(200).json(post)
    } catch (error) {
        return next(error)
    }
}

export { createPost, getPosts, getPost }