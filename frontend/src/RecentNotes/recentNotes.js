import React from 'react';
import './recentNotes.css';
import { useGlobalContext } from '../context/globalContext';
import { FaTrashCan } from "react-icons/fa6";
import {format} from "date-fns"

const RecentNotes = () => {
     
    const { notes,deleteNote } = useGlobalContext();
    

    

    return (
        <div className='recentNotes'>
            {
               notes.slice(0,5).map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')          
                if(note.status === true){
                    return(
                        <div className= "recentNote" key={note._id} >
                            <div className='recentNoteText'>
                              <p>{note.title}</p>
                              <p style={{fontSize: "12px"}}>{time}</p>
                            </div>
            
                            <FaTrashCan style={{cursor: 'pointer'}} onClick={()=> deleteNote(note._id)} /> 
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