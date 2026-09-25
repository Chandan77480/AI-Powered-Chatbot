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
const chatbotService_1 = __importDefault(require("../services/chatbotService"));
class ChatController {
    sendMessage(req, res) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = req.body;
            try {
                const response = yield chatbotService_1.default.processMessage(message);
                res.json({ response });
            }
            catch (error) {
                const status = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500;
                const detail = ((_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.message) || error.message;
                res.status(status === 404 ? 502 : status).json({ error: detail });
            }
        });
    }
    receiveMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const messages = yield chatbotService_1.default.getMessagesForUser(userId);
            res.json({ messages });
        });
    }
}
exports.default = new ChatController();
