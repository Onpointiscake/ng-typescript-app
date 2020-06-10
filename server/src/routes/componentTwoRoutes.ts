import { Router } from 'express'

class ComponentTwoRoutes {
    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.send('Hello from componentTwo')
        })
    }
}

const componentTwoRoutes = new ComponentTwoRoutes()
export default componentTwoRoutes.router