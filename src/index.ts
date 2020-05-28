import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes'

class Server {
   public  app: Application;


    constructor(){
        this.app = express();
        this.config();
        this.router();
    }

    config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded( {extended: false} ));


    }

    router(): void{
        this.app.use(indexRoutes)
        this.app.use('/api/productos',productosRoutes)
    }

    star(): void{
        this.app.listen(this.app.get('port'))
        console.log('el puerto es', this.app.get('port'))

    }
}

const server =  new Server(); 
server.star();