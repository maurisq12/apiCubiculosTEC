import express from "express";
import config from './config'
import estudiantesRoutes from './routes/estudiantes.routes'
import cubiculosRoutes from './routes/cubiculos.routes'
import asignacionesRoutes from './routes/asignaciones.routes'
import correosRoutes from './routes/correos.routes'


const app = express()


// configuración 
app.set('port', config.port)

//midddlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use(estudiantesRoutes)
app.use(cubiculosRoutes)
app.use(asignacionesRoutes)
app.use(correosRoutes)

export default app