"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControlador_1 = __importDefault(require("../controlller/productosControlador"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosControlador_1.default.list);
        this.router.get('/:id', productosControlador_1.default.getOne);
        this.router.post('/create', productosControlador_1.default.create);
        this.router.put('/:id', productosControlador_1.default.update);
        this.router.delete('/:id', productosControlador_1.default.delete);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
