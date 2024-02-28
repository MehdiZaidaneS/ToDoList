import React, { useState } from 'react';
import './list.css';
// import {format} from "date-fns"
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import RecentNotes from '../RecentNotes/recentNotes';
import CreateNote from '../createNote/createNote';
import { useGlobalContext } from '../context/globalContext';

const List = () => {


    const { notes, deleteNote, updateNote, changeName, changeSelected} = useGlobalContext();

  

    const [watchTasks, setWatchTasks] = useState(true)
    const [active, setActive] = useState(true)
    const [newName, setNewName] = useState("")
    

    const handleInput = e => {
      setNewName(e.target.value)
      console.log(newName)
}

   
    function nameChanger(noteTitle, note){

      const newNote = {
         newTitle: newName,
         title: noteTitle
      }

      changeName(newNote)
      changeSelected(note)
      console.log(newName, noteTitle)
    }


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
                if(note.status === false){
                    return(
                        <div className='card' key={note._id}>
                          
                            <div className='note' >
                               <div style={{margin: "0 auto"}}>
                                 {
                                  note.selected === false &&
                                  <h3 onClick={()=>{ changeSelected(note); setNewName(note.title)}}>{note.title}</h3>
                                 }
                                 {
                                  note.selected &&
                                  <form onSubmit={()=>nameChanger(note.title, note)}>
                                    <input  value={newName} onChange={handleInput}  style={{color: "white",background:"none", border:"none", padding:"4px"}} type='text' placeholder="Add text..."></input>
                                  </form>
                                  
                                 }
                                
                               </div>
                               {
                                note.selected === false &&
                                <FaEdit onClick={()=>{ changeSelected(note); setNewName(note.title)}} style={{float:"right"}} size={19}/>
                               }
                               
                            </div>
                          
                            <button style={{marginLeft: "13px"}} onClick={()=> note.selected ? nameChanger(note.title, note) : updateNote(note) }><FaCheckCircle size={25} /></button>
                            <button  ><TiDelete onClick={()=> note.selected ? changeSelected(note) : deleteNote(note._id)} size={35} style={{color: "red"}} /></button>
                            
                            

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