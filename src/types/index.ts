export interface ChatRequest {
    userId: string;
    message: string;
}

export interface ChatResponse {
    responseId: string;
    message: string;
    timestamp: Date;
}