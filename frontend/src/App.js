import { useEffect } from 'react';
import './App.css';
import List from './list/list';
import CreateNote from './createNote/createNote';
import { useGlobalContext } from './context/globalContext';

function App() {

  const {getNotes } = useGlobalContext();
  
  useEffect(()=>{
   
    getNotes()
         // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="App">
        <List />
        <CreateNote />
    </div>
  );
}

export default App;