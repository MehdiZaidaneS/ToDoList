import React, { useState } from 'react';
import './list.css';
// import {format} from "date-fns"
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import RecentNotes from '../RecentNotes/recentNotes';
import CreateNote from '../createNote/createNote';
import { useGlobalContext } from '../context/globalContext';

const List = () => {

    const { notes, deleteNote, updateNote } = useGlobalContext();

    const [watchTasks, setWatchTasks] = useState(true)

    const [active, setActive] = useState(true)

    return (
        <div className='list'>
           
            <h1>Get things done!</h1>

            <CreateNote />

            <div className='buttons'>
              <button style={{backgroundColor: active ? "gray" : "white"}} onClick={()=> {setWatchTasks(true); setActive(true)}}>Tasks</button>
              <button style={{backgroundColor: active ? "white" : "gray"}} onClick={()=> {setWatchTasks(false); setActive(false)}}>Completed</button>
            </div>

             { watchTasks === true &&
              notes.map(note =>{
                // var time = format(new Date(note.createdAt), 'dd/MM/yyyy')
                if(note.status === false){
                    return(
                        <div className='card' key={note._id}>
                          
                            <div className='note' >
                               <div>
                                 <h3>{note.title}</h3>
                               </div>
                               {/* <div>
                                  <p>Created at: {time}</p>
                                  <p style={{color: "red"}}>Status: Undone </p>
                                 
                               </div>       */}
                            </div>
                            <button style={{marginLeft: "13px"}} onClick={()=> updateNote(note) }><FaCheckCircle size={25} /></button>
                            <button  ><TiDelete onClick={()=> deleteNote(note._id)} size={35} style={{color: "red"}} /></button>

                        </div> 
                    )   
                }else{
                    return(
                        null
                    )
                }
              })
             }

             {
               watchTasks=== false &&
               <RecentNotes />
             }

            </div>   
    );
};

export default List;