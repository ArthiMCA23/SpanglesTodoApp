const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')


app.use(express.json());
app.use(cors())
const db = require('./config/db')

db();

const taskRoute = require("./Routes/taskRoutes");

app.use("/api/tasks" , taskRoute);

const PORT = process.env.PORT  || 8080

app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))