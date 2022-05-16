import { RequestHandler } from "express"
import Data from "./Data"

export const getData: RequestHandler = async (req, res) => {
    try {
        const data = await Data.find()
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
}