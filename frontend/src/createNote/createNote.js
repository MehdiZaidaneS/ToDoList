import React, { useState } from 'react';
import './createNote.css';
import { useGlobalContext } from '../context/globalContext';
const CreateNote = () => {

    const { addNote, notes } = useGlobalContext();
    

    

     const handleInput = name => e => {
         setInputState({...inputState, [name]: e.target.value})
    }

    


    const [error, setError] = useState("")

    const [inputState, setInputState] = useState({
        title: "",
    })

    const {title} = inputState;


    const handleSubmit = e =>{

        e.preventDefault()
        
        
        if(notes.length > 13){
            setError("Error!")
        }else{
            addNote(inputState)
            setInputState({
                title:""
            })
            setError("")
        }

        
    }
    return (
        <div className='createNotes'>
           
            <form onSubmit={handleSubmit}>
                 {error && <p style={{color: "red"}}>{error}</p>}
                <input placeholder='Task to be done...' type='text' value={title} name={"title"} onChange={handleInput("title")}></input>
                <button>Add</button>
            </form>
            
            
        </div>
    );
};

export default CreateNote;