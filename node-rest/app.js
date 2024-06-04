const express = require('express')
const path = require('path')
const appRouter = require('./routes/api')
const bodyParser = require('body-parser'); 
const app = express()
const port = 8081
const hostname = '127.0.0.1'


app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',appRouter)

app.get('/',(req,res) => {
    res.send('Hello, World\n')
})

app.listen(port, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})