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
    }
    return (
        <div className='createNotes'>
            <h1>createNotes</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} name={"title"} onChange={handleInput("title")}></input>
                <button>Submit</button>
            </form>
            <RecentNotes />
            
            
        </div>
    );
};

export default CreateNote;