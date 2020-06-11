import {Request, Response } from 'express'
import pool from '../database'

class ComponentTwoController {

    public async list (req: Request, res: Response){
       await pool.query('SELECT * FROM hotel', (err, result, fields) => {
           if(err) throw err
           res.json(result)
       })
       
    }

    public getOne (req: Request, res: Response) {
        res.json({info: 'Listing the component two number ' + req.params.id})
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO hotel set ?' , [req.body])
        res.json(req.body)
    }

    public delete (req: Request, res: Response) {
        res.json({info: 'deleting a component two' + ' number ' + req.params.id})
    }

    public put (req: Request, res: Response) {
        res.json({ info: 'updating a component two' + ' number ' + req.params.id})
    }

}

export const componentTwoController = new ComponentTwoController()