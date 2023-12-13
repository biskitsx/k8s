import { NextFunction, Request, Response } from "express"
import { Error } from "mongoose"

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const status = 404
    const message = error.message || 'Something went wrong'
    res
        .status(status)
        .json({
            success: false,
            status,
            message
        })
}