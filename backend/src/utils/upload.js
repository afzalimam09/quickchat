import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import config from "../core/config.js";

const storage = new GridFsStorage({
    url: config.db.str,
    options: config.db.options,
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimeType) === -1)
            return `${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`,
        };
    },
});

export default multer({ storage });
