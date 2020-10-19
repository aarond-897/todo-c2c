import React, {useState, useEffect} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const Todo = props =>{

    let [todos, setTodos]= useState([])

    
    const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }
      })(Typography);

    useEffect(() => {
        axios.get('/api/todos')
            .then(res=>{
                console.log(res)
                console.log('retrieve todos working')
                setTodos(res.data)
            })
            .catch(err=>console.log(err))
    },[]);

    const updateTodo = (todos)=>{
        console.log('add new task working')
        setTodos(todos)
    }

    return(
        <Box maxWidth="md"  display="flex" flexDirection="column"  height="95%" width={1/3} margin='auto' alignItems="center"  borderRadius={16}>
            <WhiteTextTypography variant='h2' >Aaron's Todo List</WhiteTextTypography>
            <AddTodo updateTodo={updateTodo}/>
            <TodoList todos={todos} updateTodo={updateTodo}/>
        </Box>
    )
}

export default Todo;