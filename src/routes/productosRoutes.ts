import {Router} from 'express';

import productosControlador from '../controlller/productosControlador'

class ProductosRoutes {
  public router : Router = Router();

  constructor(){
      this.config();
      

  }
  config(): void {
      this.router.get('/', productosControlador.list);
      this.router.get('/:id', productosControlador.getOne);
      this.router.post('/create', productosControlador.create);
      this.router.put('/:id', productosControlador.update);
      this.router.delete('/:id', productosControlador.delete);
      


  }

}
const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;