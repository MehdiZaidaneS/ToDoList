import React, { useState } from 'react';
import './list.css';
import {format} from "date-fns"
import { useGlobalContext } from '../context/globalContext';

const List = () => {

    const { notes, deleteNote, updateNote } = useGlobalContext();

    
    
   
    



   

    return (
        <div className='list'>
           
            <h1>List of Notes</h1>
             {
              notes.map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === false){
                    return(
                        <div className='note' key={note._id}>
                           <p>{note.title}</p>
                           <p>{time}</p>
                           <p>Status: Undone </p>
                           <button onClick={()=> updateNote(note) }>Done</button>
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
    );
};

export default List;