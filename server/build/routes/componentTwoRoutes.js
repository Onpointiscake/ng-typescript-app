"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ComponentTwoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Hello from componentTwo');
        });
    }
}
const componentTwoRoutes = new ComponentTwoRoutes();
exports.default = componentTwoRoutes.router;
