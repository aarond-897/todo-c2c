import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { TextField } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import axios from 'axios';

const AddTodo = props =>{

    let [newTodo, setNewTodo]=useState('');


    const addTask = () =>{
        axios.post('/api/todo',{newTodo})
        .then(res=>{
            console.log(res)
            props.updateTodo(res.data)
        })
        .catch(err=>console.log(err))
    }

    const sortAscending=()=>{
        axios.get('/api/todo/sortA')
            .then(res=>{
                console.log('sort ascending response back')
                props.updateTodo(res.data)
            })
            .catch(err=>console.log(err))
    }

    const sortDescending=()=>{
        axios.get('/api/todo/sortD')
            .then(res=>{
                console.log('sort descending response back')
                props.updateTodo(res.data)
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <div> 
                <TextField id="standard-basic" placeholder='Insert new todo' type="text" onChange={e => setNewTodo(e.target.value)}/>
            </div>
            <div  display="flex" flexDirection="row">
                <Button 
                    endIcon={<AddIcon />}
                    onClick={addTask}
                    style={{ color: blueGrey[50] }}>
                </Button>
                <Button 
                    endIcon={<ArrowUpwardIcon />}
                    onClick={sortAscending}
                    style={{ color: blueGrey[50] }}>
                </Button>
                <Button 
                    endIcon={<ArrowDownwardIcon />}
                    onClick={sortDescending}
                    style={{ color: blueGrey[50] }}>
                </Button>
            </div>
        </div>    
    )

}

export default AddTodo;