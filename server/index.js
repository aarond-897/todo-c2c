require('dotenv').config();

//connect to controllers
const userCtrl = require('./controllers/userCtrl')


//server boilerplate
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING}=process.env,
    //   path = require('path'),
      port=SERVER_PORT,
      app=express();
app.use(express.json());


//connect to db
massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}
}).then(db=>{
    app.set('db',db);
    console.log('db connected')
}).catch(err=>console.log(err));



//user endpoints
app.post('/api/todo', userCtrl.addTodo)
app.put('/api/renameTodo', userCtrl.editTodo)
app.delete('/api/todo/:id', userCtrl.deleteTodo)
app.get('/api/todos', userCtrl.retrieveTodos)
app.put('/api/todo/:id', userCtrl.completeTodo)
app.put('/api/priority/:id', userCtrl.todoPriority)
app.get('/api/todo/sortA', userCtrl.sortAscending)
app.get('/api/todo/sortD', userCtrl.sortDescending)


app.listen(port, ()=>console.log(`Connected on port ${port}`))