import express, { Application, Request, Response } from 'express';
import routesUser from '../routes/user';

class Server {

    private app : Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (request: Request, response: Response) => {
            response.json({
                mensaje: 'API Working'
            })
        }) 
        this.app.use('/api/users', routesUser)
    }

    midlewares(){
        //Parseamos el body
        this.app.use(express.json());
    }
}

export default Server;