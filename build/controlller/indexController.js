"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //pool.query('DESCRIBE productos');
        res.json({ text: 'el producto es ' });
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
