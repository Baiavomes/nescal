import axios from 'axios'
import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


export const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (event) =>{
    
    event.preventDefault()
    try{
      console.log("APERTOU")
      const response = await axios.post(
        "http://localhost:8080/loginProfessor", {email, senha}
      );

      const token = response.data.acessToken;
      localStorage.setItem("token", token);
      setLoggedIn(true)

    }catch (error){
      console.error(error)

    }
  }

  if(loggedIn){
    return <Navigate to="/professor/:id"/>;
  }

  return (
    <div className='d-flex align-items-center justify-content-center' style={{height: "100vh"}} >
      <div className='border rounded p-5' style={{backgroundColor: "#5f4888", borderRadius: "13px" }}>
        <Form style={{color:"#ffffff", margin: "5px"}} onSubmit={handleLogin} >
          <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)}/>
          </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type='password' placeholder='Digite seu senha' value={senha} onChange={(event) => setSenha(event.target.value)}/>
     
        </Form.Group>

        
        <Button  style={{backgroundColor: "#9370DB", borderColor: "#937DB", margin: "10px"}} type="submit"> 
        Entrar
        </Button>
        </Form>
      </div>

    </div>
  )
}
