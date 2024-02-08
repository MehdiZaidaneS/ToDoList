import React, { useState } from 'react';
import './createNote.css';
import RecentNotes from '../RecentNotes/recentNotes';
import { useGlobalContext } from '../context/globalContext';
const CreateNote = () => {

    const { addNote } = useGlobalContext();
    

    

     const handleInput = name => e => {
         setInputState({...inputState, [name]: e.target.value})
    }

    


    

    const [inputState, setInputState] = useState({
        title: "",
    })

    const {title} = inputState;


    const handleSubmit = e =>{

        e.preventDefault()

        addNote(inputState)

        setInputState({
            title:""
        })
    }
    return (
        <div className='createNotes'>
           
            <form onSubmit={handleSubmit}>
                <h1>ADD TASK</h1>
                <input placeholder='Task to be done...' type='text' value={title} name={"title"} onChange={handleInput("title")}></input>
                <button>Add</button>
            </form>
            <RecentNotes />
            
            
        </div>
    );
};

export default CreateNote;