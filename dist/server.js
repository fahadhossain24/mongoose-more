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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
app.get('/', function (req, res, next) {
    res.json();
});
// connect database
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
            console.log('Database connected');
        }
        catch (error) {
            console.log('Failed to connect to database');
        }
    });
}
connectDB();
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
