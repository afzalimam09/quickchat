import app from "../app.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { chatSocket } from "../socket/chatSocket.js";

if (process.env.NODE_ENV === "production") {
    process.on("uncaughtException", (err) => {
        console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
        console.log(err.name, err.message);
        process.exit(1);
    });
}

const server = createServer(app);

const io = new Server(server, {
    serveClient: false,
    cors: {
        origin: "*",
    },
});

chatSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on("SIGTERM", () => {
    console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
    server.close(() => {
        console.log("💥 Process terminated!");
    });
});
