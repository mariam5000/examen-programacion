import React, { useState } from "react"
import App from "../App";


function UserList() {
    const url = "http://localhost:3000/lista"
    const [nombre, setNombre] = useState('');
    const[id,setId] = useState([]);
    const [email, setEmail] = useState('');
    const [lista, setLista] = useState([]);

    const nombreImput = (e)=> {setLista(e.target.value)};
    const emailImput = (e) => {setLista(e.target.value)};

  
      const Datos ={nombre,id,email};
      axios.get(url, Datos).then((res)=> {[Datos,res.data]});
    
    
    
    const enviar = ()=>{
      const todo = {nombreImput,emailImput}
      axios.post(url, todo).then((res)=>{todo , res.data})
    };

    
  
    return (
      <>
        <h3>examen programacion</h3>
        <form>
          
            <input type="text" name="nombre" placeholder="Nombre"/>
            <input type="email" name=" email" placeholder="Email"/>
            <button onClick={enviar}>hacer click</button>
        </form>
        <table>
          <th>id</th>
          <th>nombre</th>
          <th>email</th>
        </table>
          
      </>
    )
  }
  
  export default UserList;