import React,{useState,useRef,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const element = useRef();
  const [anArray,setAnArray]  = useState([]);
  const [sortedArray,setSortedArray]  = useState([]);
 
  useEffect(()=>{
    let newArr = sortAnArray(anArray);
    setSortedArray(newArr);

  },[anArray]);

   const sortAnArray = (array) => {

      let mapOfarra = {};
      let sortedWithFreq = [];
      let tempArr = [];
  
      array.forEach(function(value) { 
          if ( value in mapOfarra )
          mapOfarra[value] = mapOfarra[value] + 1;
          else
          mapOfarra[value] = 1;
      });
      
  
      for(var key in mapOfarra){
        sortedWithFreq.push([key, mapOfarra[key]])
      }
  
      sortedWithFreq.sort(function(a, b){
          return b[1] - a[1]
      })
  
      
      sortedWithFreq.forEach(function(obj){
          for(var i=0; i < obj[1]; i++){
            tempArr.push(obj[0]);
          }
      })
      return tempArr;
      
  }

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
