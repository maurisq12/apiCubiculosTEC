import express from "express";
import config from './config'
import estudiantesRoutes from './routes/estudiantes.routes'
import cubiculosRoutes from './routes/cubiculos.routes'

const app = express()


// configuración 
app.set('port', config.port)

//midddlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use(estudiantesRoutes)
app.use(cubiculosRoutes)

export default app