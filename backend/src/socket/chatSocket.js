let users = [];

const addUser = (userData, socketId) => {
    !users.some((user) => user.sub === userData.sub) &&
        users.push({ ...userData, socketId });
};

const getUser = (userId) => {
    return users.find((user) => user.sub === userId);
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

export const chatSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("Socket Connected! ", socket.id);

        //connect
        socket.on("addUser", (userData) => {
            addUser(userData, socket.id);
            io.emit("getUsers", users);
        });

        //send message
        socket.on("sendMessage", (data) => {
            const user = getUser(data.receiverId);
            user && io.to(user.socketId).emit("getMessage", data);
        });
        //logout
        socket.on("logout", () => {
            removeUser(socket.id);
            io.emit("getUsers", users);
        });
        //disconnect
        socket.on("disconnect", () => {
            removeUser(socket.id);
            io.emit("getUsers", users);
        });
    });
};
