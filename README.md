# Chatbot API

## Overview
This project is a chatbot API built using Node.js and TypeScript. It provides endpoints for sending and receiving messages, allowing users to interact with a chatbot.

## Features
- Send and receive messages through a RESTful API.
- Middleware for handling requests and responses.
- Environment variable management using a `.env` file.
- Modular structure with separate files for controllers, routes, and services.

## Project Structure
```
chatbot-api
├── src
│   ├── app.ts                # Initializes the Express application and sets up middleware
│   ├── server.ts             # Starts the server and listens on a specified port
│   ├── controllers           # Contains the ChatController for handling chat interactions
│   │   └── chatController.ts
│   ├── routes                # Defines API endpoints for the chatbot
│   │   └── chatRoutes.ts
│   ├── services              # Contains the ChatbotService for processing messages
│   │   └── chatbotService.ts
│   └── types                 # Defines interfaces for request and response objects
│       └── index.ts
├── .env                      # Environment-specific variables
├── .env.example              # Template for the .env file
├── .gitignore                # Files and directories to ignore in version control
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd chatbot-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on the `.env.example` template and fill in the required environment variables.

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the API at `http://localhost:<port>` (replace `<port>` with the port specified in your configuration).

## API Endpoints
- `POST /chat/send`: Send a message to the chatbot.
- `GET /chat/receive`: Receive a response from the chatbot.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
## Local Hosting
http://localhost:3000

## License
This project is licensed under the MIT License.
