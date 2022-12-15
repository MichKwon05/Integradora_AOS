"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, user_1.getUsers);
router.get('/:id', user_1.getUser);
router.delete('/:id', user_1.deleteUser);
router.post('/', user_1.postUser);
router.put('/:id', user_1.updateUser);
router.post('/login', user_1.loginUser);
exports.default = router;
