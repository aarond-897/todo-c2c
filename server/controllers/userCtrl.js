require('dotenv').config();

module.exports={
    addTodo: async(req,res)=>{
        console.log('addtodo working')
        const {newTodo}=req.body,
            db=req.app.get('db')
            await db.add_todo({newTodo})
            let todoList = await db.retrieve_todos()
            res.status(200).send(todoList);

    },
    editTodo: async(req,res)=>{
        console.log('edit todo working')
        const {todo, id}=req.body,
        db=req.app.get('db')
        console.log(todo)
        await db.edit_todo({todo,id})
        let todoList = await db.retrieve_todos()
        res.status(200).send(todoList);
    },
    deleteTodo:async(req,res)=>{
        console.log('deleteTodo working')
        const {id}=req.params,
        db=req.app.get('db')
        await db.delete_todo({id})
        let todoList = await db.retrieve_todos()
        res.status(200).send(todoList);
    },
    completeTodo: async(req,res)=>{
        console.log('complete todo working')
        const {id}=req.params,
        db=req.app.get('db')
        await db.complete_todo({id})
        let todoList = await db.retrieve_todos()
        res.status(200).send(todoList);
    },
    todoPriority: async(req,res)=>{
        console.log('todo priority working')
        const {id}=req.params,
        db=req.app.get('db')
        await db.todo_priority({id})
        let todoList = await db.retrieve_todos()
        res.status(200).send(todoList);
    },
    retrieveTodos: async(req,res)=>{
        console.log('retrieve todo working')
        const db=req.app.get('db')
        let todoList = await db.retrieve_todos()
        console.log(todoList)
        res.status(200).send(todoList);
    },
    sortAscending: async(req,res)=>{
        console.log("sort ascending")
        const db=req.app.get('db')
        let ascendingList =  await db.sort_ascending();
        res.status(200).send(ascendingList);
    },
    sortDescending: async(req,res)=>{
        console.log("sort descending")
        const db=req.app.get('db')
        let descendingList =  await db.sort_descending();
        res.status(200).send(descendingList);
    }
}