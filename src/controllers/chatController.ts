import chatbotService from '../services/chatbotService';

class ChatController {
    async sendMessage(req: any, res: any) {
        const { message } = req.body;
        try {
            const response = await chatbotService.processMessage(message);
            res.json({ response });
        } catch (error: any) {
            const status = error.response?.status || 500;
            const detail = error.response?.data?.error?.message || error.message;
            res.status(status === 404 ? 502 : status).json({ error: detail });
        }
    }

    async receiveMessage(req: any, res: any) {
        const { userId } = req.params;
        const messages = await chatbotService.getMessagesForUser(userId);
        res.json({ messages });
    }
}

export default new ChatController();