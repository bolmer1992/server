import { Request,Response, response } from 'express';

import pool from '../dateBase';

class ProductosControlador {

    public async list(req: Request, res: Response) {
       const elemento =  await pool.query('SELECT * FROM producto')
        res.json(elemento);
    } 

    public async getOne(req: Request, res: Response): Promise<any>{
      const  { id } = req.params;
      const elemento= await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
      res.json(elemento);
      if(elemento.lent > 0){
          return  response.json(elemento[0]);
      }
      //res.status(404).json({text: 'el juego no existe'});
    }

    public async create(req: Request, res: Response): Promise<void> {
      await pool.query('INSERT INTO producto set ?', [req.body]);
       console.log(req.body)
        res.json({message: 'juego creado'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM producto WHERE id = ?', [id]);
        res.json({message: 'el juego fue eliminado'});

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //const oldGame = req.body;
        await pool.query('UPDATE producto set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

                
}

    
export const productosControlador = new ProductosControlador();
export default productosControlador;