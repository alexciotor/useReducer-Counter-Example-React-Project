 
 
import {useState, useEffect,useRef, useReducer} from 'react'
function App() {
 const ACTIONS = {
   INCREMENT:'increment',
   DECREEMENT: 'decrement',
   RESET:'reset'
 }
  const defaultValue={
    count:0,
    counter:19
  }
 
   const reducer=(state,action)=>{
switch(action.type){
    case ACTIONS.INCREMENT:
    return {count: state.count+1}
    case 'decrement':
    return {count: state.count - 1}
    case 'reset':
      return {count:state.count = 0}
      default:
        return state

}
  
//  if(action.type==='increment'){
//    return {count: state.count +1}
//  }
//  if(action.type==='decrement'){
//    return {count:state.count-1}
//  }
//  else{
//    return {count:state.count = 0}
//  }
  }
const [value,setValue] =useState(0)
const [state,dispatch] = useReducer(reducer, defaultValue)
 const increment=()=>{
dispatch({type:'increment'})
 }
 const decrement=()=>{
dispatch({type:'decrement'})
 }

const reset = ()=>{
  dispatch({type:'reset'})
}

  return (
    <div className='content' >
   <button className="btn" onClick={()=>{
     increment()
   }}>+</button>
   <span className="line">{state.count}</span>
   <button className="btn" onClick={()=>{
     decrement()
   }}>-</button>
   <button className="btn" onClick={()=>{
     reset()
   }} >reset</button>
    </div>
  );
}

export default App;
