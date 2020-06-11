import { Request, Response } from 'express'

import pool from '../database'

class IndexController {

    public index (req: Request, res: Response) {
        //pool.query('DESCRIBE hotel')
        res.send('Hello from index')
    }

}

export const indexController = new IndexController()