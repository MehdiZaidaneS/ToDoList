import React, { useEffect, useState } from 'react';
import './recentNotes.css';
import { useGlobalContext } from '../context/globalContext';
import { FaTrashCan } from "react-icons/fa6";
import {format} from "date-fns"

const RecentNotes = () => {

    
    useEffect(()=>{
        notes.map(note =>{
            if(note.selected=== true){
                setAppearButton(true)
            }
            return(
                null
            )
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     
    const { notes,deleteNote, changeSelected } = useGlobalContext();
    
    const [appearButton, setAppearButton] = useState(false)


    // const sortedArray= notes.sort((a, b) => parseFloat(b.createdAt) - parseFloat(a.createdAt));
    
    
    function deleteSelected(){
        notes.map(note =>{
            if(note.selected === true){
                deleteNote(note._id)
            }
            return(
                null
            )
        })
    }

    function checkButtonStage(note, status){
        
        const index = notes.indexOf(note);
        const array = notes.slice()
        array.splice(index, 1);

        let check = array.some(note => note.selected === true)

        
        
        if(status === false && check === true){
            setAppearButton(true)
            changeSelected(note);
            
        }else if(status === true && check === false){ 
            setAppearButton(false)
            changeSelected(note);
        }else if(status === true && check === true){
            setAppearButton(true)
            changeSelected(note);
        }else if(status === false && check === false){
            setAppearButton(true)
            changeSelected(note);
        }

        
    }

    return (
        <div>
         {
            appearButton &&
            <FaTrashCan style={{cursor: 'pointer'}} onClick={()=> deleteSelected()} />
         }
        
         
        <div className='recentNotes'>
            {
               notes.slice(0,14).map(note =>{
                var time = format(new Date(note.createdAt), 'dd/MM/yyyy')          
                if(note.status === true){
                    return(
                        <div style={{border: note.selected ? "1px solid white" : "none"}} className= "recentNote" key={note._id} onClick={()=> checkButtonStage(note, note.selected)} >
                            <div className='recentNoteText'>
                              <p>{note.title}</p>
                              <p style={{fontSize: "12px"}}>{time}</p>
                            </div>
                            
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