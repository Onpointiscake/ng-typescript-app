import express, { Application } from 'express'
import indexRoutes from './routes/indexRoutes'
import componentTwoRoutes from './routes/componentTwoRoutes'
import morgan from 'morgan'
import cors from 'cors'

class Server {

    public app: Application

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config(): void {
        this.app.set('port', process.env.PORT || 4000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
    }

    routes(): void {
        this.app.use('/', indexRoutes)
        this.app.use('/api/componentTwo', componentTwoRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server started on port ${this.app.get('port')}`)
        })
    }

}

const server = new Server()
server.start()