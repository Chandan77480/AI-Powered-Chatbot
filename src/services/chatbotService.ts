import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export class ChatbotService {
    private apiUrl: string;
    private apiKey: string;
    private model: string;

    constructor() {
        this.apiUrl = process.env.API_URL || 'https://api.groq.com/openai/v1/chat/completions';
        this.apiKey = process.env.API_KEY || '';
        this.model = process.env.MODEL || 'qwen/qwen3.8-27b';
    }

    public async processMessage(message: string): Promise<string> {
        // Logic to process the incoming message and generate a response
        const response = await this.callExternalApi(message);
        return response;
    }

    private async callExternalApi(message: string): Promise<string> {
        if (!this.apiKey) {
            throw new Error('API_KEY is not configured');
        }

        const response = await axios.post(
            this.apiUrl,
            {
                model: this.model,
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        return response.data.choices[0].message.content;
    }

    public async getMessagesForUser(_userId: string): Promise<never[]> {
        return [];
    }
}

export default new ChatbotService();