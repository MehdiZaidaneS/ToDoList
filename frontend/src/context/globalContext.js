import axios from "axios"
import React, {useContext, useState} from "react"

const PORT_URL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext();


export const GlobalProvider = ({children}) => {
   
    
    const [error, setError] = useState(null)
    const [notes, setNotes] = useState([])




    const addNote = async(note) =>{
        const response = await axios.post(`${PORT_URL}add-note`, note)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        console.log(response)
        getNotes()
    }

    const updateNote = async(note)=>{
        const response = await axios.post(`${PORT_URL}update-note`, note)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        console.log(response)
        getNotes()
    }


    const getNotes = async() =>{
        const response = await axios.get(`${PORT_URL}get-notes`)
        setNotes(response.data)
    }

    const deleteNote = async(id)=>{
        const response = await axios.delete(`${PORT_URL}delete-note/${id}`)
        console.log(response)
        getNotes()
    }




    return(
        <GlobalContext.Provider value={{
           error,
           setError,
           addNote,
           notes,
           getNotes,
           setNotes,
           deleteNote,
           updateNote
        }}>
            {children}
        </GlobalContext.Provider>    
    )
}


export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}