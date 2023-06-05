import {Router} from 'express'
import {enviarCorreo} from '../controllers/correos.controller'


const routerC = Router();

routerC.get('/correos', enviarCorreo)


export default routerC;

