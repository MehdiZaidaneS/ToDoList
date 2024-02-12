import React from 'react';
import './recentNotes.css';
import { useGlobalContext } from '../context/globalContext';
import {format} from "date-fns"

const RecentNotes = () => {
     
    const { notes,deleteNote } = useGlobalContext();

    return (
        <div className='recentNotes'>
            <h1>Completed Tasks</h1>
           
            {
               notes.slice(0,5).map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === true){
                    return(
                        <div className='recentNote' key={note._id}>
                           <p>{note.title}</p>
                           <p>{time}</p>
                           {/* <button onClick={()=> updateNote(note) }>Undone</button> */}
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

export default RecentNotes;