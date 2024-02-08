import React from 'react';
import './list.css';
import {format} from "date-fns"
import { useGlobalContext } from '../context/globalContext';

const List = () => {

    const { notes, deleteNote, updateNote } = useGlobalContext();


    return (
        <div className='list'>
           
            <h1>TO DO LIST</h1>
            <div className='page'>
             {
              notes.map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === false){
                    return(
                        <div className='card'>
                          
                            <button style={{backgroundColor: "green", paddingLeft: "30px", margin: "25px"}} onClick={()=> updateNote(note) }></button> 
                            <div className='note' key={note._id}>
                               <div>
                                 <h2>{note.title}</h2>
                               </div>
                               <div>
                                  <p>Created at: {time}</p>
                                  <p style={{color: "red"}}>Status: Undone </p>
                                 
                               </div>      
                            </div>
                            <button style={{backgroundColor: "red", margin: "17px", padding: "5px", borderRadius:"100%"}} onClick={()=> deleteNote(note._id)}>Delete</button>

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

export default List;