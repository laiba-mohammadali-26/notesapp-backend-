const express=require('express');
const app = express();
const http=require('http').Server(app);
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://laiba-26:5OsEszaTZ7P2afEN@cluster0.gpuj0k7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')