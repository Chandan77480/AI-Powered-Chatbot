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
exports.ChatbotService = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ChatbotService {
    constructor() {
        this.apiUrl = process.env.API_URL || 'https://api.groq.com/openai/v1/chat/completions';
        this.apiKey = process.env.API_KEY || '';
        this.model = process.env.MODEL || 'qwen/qwen3.8-27b';
    }
    processMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            // Logic to process the incoming message and generate a response
            const response = yield this.callExternalApi(message);
            return response;
        });
    }
    callExternalApi(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey) {
                throw new Error('API_KEY is not configured');
            }
            const response = yield axios_1.default.post(this.apiUrl, {
                model: this.model,
                messages: [{ role: 'user', content: message }],
            }, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data.choices[0].message.content;
        });
    }
    getMessagesForUser(_userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.ChatbotService = ChatbotService;
exports.default = new ChatbotService();
