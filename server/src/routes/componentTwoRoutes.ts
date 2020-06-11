import { Router } from 'express'
import {componentTwoController} from '../controllers/componentTwoController'

class ComponentTwoRoutes {
    public router: Router = Router()

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', componentTwoController.list)
        this.router.get('/:id', componentTwoController.getOne)
        this.router.post('/', componentTwoController.create)
        this.router.put('/:id', componentTwoController.put)
        this.router.delete('/:id', componentTwoController.delete)
    }
}

const componentTwoRoutes = new ComponentTwoRoutes()
export default componentTwoRoutes.router