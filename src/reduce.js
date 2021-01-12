import React from 'react'
import {useEfect,useState,useReducer,useRef} from 'react'
 const Reduce = ()=>{
const [name,setNAme]= useState('')
const [email, setEmail] = useState('')
const [age, setAge] = useState('')
 
const [people,setPeople] = useState([])

const handleSubmit=(e)=>{
    e.preventDefault()
    if(name && email && age){
        const person = {name, email, age ,id : new Date().getTime().toString() } 
        
        setPeople((people)=>{
            return [...people, person]

        })
        setNAme('')
        setAge('')
        setEmail('')
    }
 
}
 
     return <section>
     <form onSubmit={handleSubmit} >
     <label htmlFor="">Name</label>
     <input type="text" id='name' name='name' value={name} onChange={(e)=>{setNAme(e.target.value)}}  />
     <br/>
     <label htmlFor="email">Email</label>
     <input type="text" id='email' name='email' value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
     <br/>
     <label htmlFor="age">age</label>
     <input type="text" id='age' value = {age} onChange={(e)=>{setAge(e.target.value)}} 
/>
     <br/>
     
     <button type="submit" >submit</button>
     </form>
     <div className="reduce">
     {people.map(item=>{
        const {name,email,age,id} = item
        console.log(item);
        return <article key={id} >
        
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{age}</h4>
        <h4>{id}</h4>
        
        </article>
     })}
     </div>
     </section>
 }

    export default Reduce