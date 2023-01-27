import mongoose from "mongoose";

import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

//Creating User Schema
const userSchema = new Schema(
    {
        aud: {
            type: String,
            required: [true, "AUD is required!"],
        },
        azp: {
            type: String,
            required: [true, "AZP is required!"],
        },
        email: {
            type: String,
            required: [true, "Email is required!"],
        },
        email_verified: {
            type: Boolean,
            required: true,
        },
        exp: {
            type: Number,
            required: true,
        },
        family_name: {
            type: String,
            required: true,
        },
        given_name: {
            type: String,
            required: true,
        },
        iat: {
            type: Number,
            required: true,
        },
        iss: {
            type: String,
            required: true,
        },
        jti: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Name is required!"],
        },
        nbf: {
            type: Number,
            required: true,
        },
        picture: {
            type: String,
            required: [true, "Picture is required!"],
        },
        sub: {
            type: String,
            unique: [true, "User exist already!"],
            required: [true, "SUB is required!"],
        },
    },
    { timestamps: true }
);

//Create Model out of Schema

const User = db.model("User", userSchema);

export default User;
