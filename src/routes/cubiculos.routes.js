import {Router} from 'express'
import {getCubiculos} from '../controllers/cubiculos.controller'
import {editarCubiculo} from '../controllers/cubiculos.controller'

const routerC = Router();

routerC.get('/cubiculos', getCubiculos)
routerC.post('/cubiculos/edit', editarCubiculo)


export default routerC;