import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import {format} from "date-fns"

const RecentNotes = () => {
     
    const { notes } = useGlobalContext();

    return (
        <div>
            <h1>Completed Tasks</h1>
            {
              notes.map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === true){
                    return(
                        <div className='note' key={note._id}>
                           <p>{note.title}</p>
                           <p>{time}</p>
                           <p>Status: Undone </p>
                           <button>Undone</button>
                           <button>Delete</button>
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