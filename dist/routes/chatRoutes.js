"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = __importDefault(require("../controllers/chatController"));
const router = (0, express_1.Router)();
const chatController = chatController_1.default;
router.post('/send', chatController.sendMessage.bind(chatController));
router.post('/receive/:userId', chatController.receiveMessage.bind(chatController));
exports.default = router;
