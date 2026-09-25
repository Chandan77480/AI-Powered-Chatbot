import { Router } from 'express';
import ChatController from '../controllers/chatController';

const router = Router();
const chatController = ChatController;

router.post('/send', chatController.sendMessage.bind(chatController));
router.post('/receive/:userId', chatController.receiveMessage.bind(chatController));

export default router;