import { useEffect } from 'react';
import './App.css';
import { useGlobalContext } from './context/globalContext';

function App() {

  const {getNotes, notes} = useGlobalContext();
  
  useEffect(()=>{
   
    getNotes()
         // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="App">
      <div>
        <h1>Hola</h1>
      {
        notes.map(note =>{
          return(
            <p key={note._id}>{note.title}</p>
          )
        })
       }

      </div>
    </div>
  );
}

export default App;