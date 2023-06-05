import {Router} from 'express'
import {getAsignaciones} from '../controllers/asignaciones.controller'

const routerA = Router();

routerA.get('/asignaciones', getAsignaciones)


export default routerA;