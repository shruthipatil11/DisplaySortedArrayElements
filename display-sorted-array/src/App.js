import React,{useState,useRef,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const element = useRef();
  const [anArray,setAnArray]  = useState([]);
 

  const addElementsToAnArr =  () => {
     setAnArray(array => [...array,element.current.value]);
    console.log(anArray.toString());
  }
  
  return (
    <div className="App">
       <div>
       <input type="number" name="numberInput" ref={element}/>
       <button type="submit" onClick={addElementsToAnArr}>Add Element</button>
       </div>
      
    </div>
  );
}

export default App;
