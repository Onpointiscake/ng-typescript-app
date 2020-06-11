"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //pool.query('DESCRIBE hotel')
        res.send('Hello from index');
    }
}
exports.indexController = new IndexController();
