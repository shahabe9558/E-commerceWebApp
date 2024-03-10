const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;




// body parser  to pass the data  from front to database  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cors = require('cors');
app.use(cors());

// definning the routes of the controlllers 
// console.log("Yaha tak thik kamm kar raha hai");
const signRoutes = require('./routes/User');
app.use('/api/v1', signRoutes);


const dbConnect = require("./config/database");
dbConnect();

// listining the app on a port 
app.listen(PORT, ()=>{
    console.log(`Server started running at port ${PORT}`);
})

// getting the result 
app.get('/', cors(), (req, res)=>{
    res.send('<h1>Working tree clean nothing to commit</h1>');
})