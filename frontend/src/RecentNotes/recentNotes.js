import React from 'react';
import './recentNotes.css';
import { useGlobalContext } from '../context/globalContext';
import {format} from "date-fns"

const RecentNotes = () => {
     
    const { notes,deleteNote, updateNote } = useGlobalContext();

    return (
        <div className='recentNotes'>
            <h1>Completed Tasks</h1>
            <div cl>
            {
              notes.map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === true){
                    return(
                        <div className='note' key={note._id}>
                           <p>{note.title}</p>
                           <p>{time}</p>
                           <p>Status: Done </p>
                           <button onClick={()=> updateNote(note) }>Undone</button>
                           <button onClick={()=> deleteNote(note._id)}>Delete</button>
                      </div> 
                    )   
                }else{
                    return(
                        null
                    )
                }
              })
             }

            </div>
            
        </div>
    );
};

export default RecentNotes;