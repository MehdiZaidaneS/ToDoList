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


// function changeColor(color, colorText){
    
//     document.body.style.backgroundColor= color;
//   }


  return (
    <div className="App">
      {/* <div className='buttons'>
        <button style={{backgroundColor: "blue", padding: "15px"}} onClick={() => changeColor("blue", "black")}></button>
        <button style={{backgroundColor: "black", padding: "15px"}}onClick={()=> changeColor("black", "white")}></button>
        <button style={{backgroundColor: "green", padding: "15px"}}onClick={()=> changeColor("green", "white")}></button>
      </div>  */}
      <List />
      {/* <CreateNote /> */}
    </div>
  );
}

export default App;