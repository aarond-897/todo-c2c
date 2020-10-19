import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { TextField } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';






const TodoItem = props =>{
    let [updateToggle, setUpdateToggle]=useState(false);
    let [newTodo, setNewTodo]=useState('');

    const completeTodo =(id)=>{
        axios.put(`/api/todo/${id}`)
        .then(res=>{
            console.log('complete to do working')
            props.updateTodo(res.data)
        })
    }

    const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }
      })(Typography);
    
    const priority =(id)=>{
        axios.put(`/api/priority/${id}`)
        .then(res=>{
            console.log('delete to do working')
            props.updateTodo(res.data)
        })
    }
    
    const updateTodo =(id)=>{
        setUpdateToggle(!updateToggle)
        if (updateToggle){
            axios.put('/api/renameTodo',{todo:newTodo, id})
            .then(res=>{
                console.log('update todo working')
                console.log(res.data)
                props.updateTodo(res.data)
            })
        }
    }
    
    const deleteTodo =(id)=>{
        axios.delete(`/api/todo/${id}`)
        .then(res=>{
            console.log('delete to do working')
            props.updateTodo(res.data)
        })
    }

    return(
        <Box>
            {console.log(props)}
            {updateToggle?
            <TextField color='primary' id="standard-basic" placeholder='Insert new todo' type="text" onChange={e => setNewTodo(e.target.value)}/>
            :<WhiteTextTypography>
                {props.todo} {props.priority?'!':null} {props.complete?null:'Complete'}
            </WhiteTextTypography>}
                <Button 
                    endIcon={<CheckIcon />}
                    //insert complete function
                    onClick={()=>completeTodo(props.id)}
                    style={{ color: green[500] }}
                    border={0}
                    >
                        Complete
                </Button>
                <Button 
                    endIcon={<PriorityHighIcon />}
                    //insert priority function
                    onClick={()=>priority(props.id)}
                    style={{ color: yellow[500] }}>
                        Priority
                </Button>
                <Button 
                    endIcon={<UpdateIcon />}
                    //insert edit function
                    onClick={()=>updateTodo(props.id)}
                    style={{ color: orange[500] }}>
                        Update
                </Button>
                <Button 
                    endIcon={<DeleteIcon />}
                    //insert delete function
                    onClick={()=>deleteTodo(props.id)}>
                        Delete
                </Button>
                <Divider />
        </Box>
    )
}

export default TodoItem;