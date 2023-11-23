import {toast} from 'react-toastify'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosService from '../utilis/ApiService';

function SignUp() {

  let navigate = useNavigate()

  let [Name,setName] = useState('')
  let [email,setEmail] = useState('')
  let [Password,setPassword] = useState('')
  let [CPassword,setCPassword] = useState('')


  let handleCreate = async(e)=>{
    e.preventDefault()
    try {
      if(Password === CPassword){
        let res =  await AxiosService.post("/user/create",{
          Name,
          email,
          Password
        })
        if(res.status === 201){
          toast.success('Create Successfully')
          sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem('name',res.data.userData.Name)
          navigate('/home/input/I_value')
        }
      }else{
        toast.warning('Mismatch Password')
      }} catch (error) {
        toast.error(error.response.data.message)
      }
      }

  return (
    <NavDiv className="container" id="signIn">
      <ContentDiv className="row align-items-center">
        <form className=" m-auto" onSubmit={(e)=>handleCreate(e)} >
          <div className="row">
            <div className="input-field col s6 ">
              <i className="material-icons prefix">person</i>
              <input type="text"  className="validate"  onChange={(e)=>setName(e.target.value)}/>
              <label>Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 ">
              <i className="material-icons prefix">mail</i>
              <input type="email"  className="validate"  onChange={(e)=>setEmail(e.target.value)}/>
              <label>Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">lock</i>
              <input type="password" className="validate" onChange={(e)=>setPassword(e.target.value)}/>
              <label>Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">lock</i>
              <input type="password" className="validate" onChange={(e)=>setCPassword(e.target.value)}/>
              <label>Confirm Password</label>
            </div>
          </div>
          <BDiv className="S-btn">
            <Button className="btn waves-effect waves-light btn-dark " type="submit" name="action">Create
              <i className="material-icons right">send</i>
            </Button>
            <Button className="waves-effect waves-light btn btn-dark " onClick={()=>navigate('/')}>SignIn
              <i className="material-icons right">account_circle</i>
            </Button>
          </BDiv>
        </form>
      </ContentDiv>
    </NavDiv>
  );
}

export default SignUp;

const NavDiv = styled.div({
  paddingTop: '100px',
})
const ContentDiv = styled.div({
  marginTop:'-40px',
  maxWidth: '700px',
  padding:'50px',
  borderRadius:'50px',
  backgroundColor:'rgba(255,255,255,0.3)'
})

const BDiv = styled.div({
  marginLeft:'25%',
  display:'flex',
  gap:'40px'
})

const Button = styled.button({
  borderRadius:'15px',
  backgroundColor:'rgba(255,255,255,0.5)',
  color:'black',
})