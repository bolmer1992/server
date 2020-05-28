import { Request,Response } from 'express';
import pool from '../dateBase';

class IndexController {

    public index (req: Request, res: Response) {
        //pool.query('DESCRIBE productos');
      res.json({text: 'el producto es '})

    } 

}
export const indexController = new IndexController();
export default indexController;