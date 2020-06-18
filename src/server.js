const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://root:root@cluster0-hk4kr.mongodb.net/omnistack8?retryWrites=true&w=majority',{
   useNewUrlParser : true 
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen('3333');
