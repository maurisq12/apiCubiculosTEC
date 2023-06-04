import {Router} from 'express'
import {getCubiculos} from '../controllers/cubiculos.controller'

const routerC = Router();

routerC.get('/cubiculos', getCubiculos)


export default routerC;