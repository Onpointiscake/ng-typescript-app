"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componentTwoController_1 = require("../controllers/componentTwoController");
class ComponentTwoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', componentTwoController_1.componentTwoController.list);
        this.router.get('/:id', componentTwoController_1.componentTwoController.getOne);
        this.router.post('/', componentTwoController_1.componentTwoController.create);
        this.router.put('/:id', componentTwoController_1.componentTwoController.put);
        this.router.delete('/:id', componentTwoController_1.componentTwoController.delete);
    }
}
const componentTwoRoutes = new ComponentTwoRoutes();
exports.default = componentTwoRoutes.router;
