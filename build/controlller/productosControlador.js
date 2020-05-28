"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosControlador = void 0;
const express_1 = require("express");
const dateBase_1 = __importDefault(require("../dateBase"));
class ProductosControlador {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const elemento = yield dateBase_1.default.query('SELECT * FROM producto');
            res.json(elemento);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const elemento = yield dateBase_1.default.query('SELECT * FROM producto WHERE id = ?', [id]);
            res.json(elemento);
            if (elemento.lent > 0) {
                return express_1.response.json(elemento[0]);
            }
            //res.status(404).json({text: 'el juego no existe'});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dateBase_1.default.query('INSERT INTO producto set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'juego creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dateBase_1.default.query('DELETE FROM producto WHERE id = ?', [id]);
            res.json({ message: 'el juego fue eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //const oldGame = req.body;
            yield dateBase_1.default.query('UPDATE producto set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
}
exports.productosControlador = new ProductosControlador();
exports.default = exports.productosControlador;
