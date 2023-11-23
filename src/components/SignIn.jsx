import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosService from '../utilis/ApiService'
import { useState } from "react";
import {toast} from 'react-toastify'


function SignIn() {


  let [email,setEmail] = useState('');
  let [Password,setPassword] = useState('')

  let navigate = useNavigate();

  let handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      let res =  await AxiosService.post("/user/login",{
        email,
        Password
      })
      if(res.status === 200){
        console.log(res.data)
        toast.success('login Successfully')
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem('name',res.data.userData.Name)
        navigate('/home/input/I_value')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <ContainerDiv className="container" id="signIn">
      <ContentDiv className="row align-items-center">
        <div>
          <form className=" m-3 " onSubmit={(e)=>handleSubmit(e)} >
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
              <Span onClick={()=>navigate('/forget')}>forget Password ?</Span>
            </div>
            <ButtonDiv className="S-btn">
              <Button className="btn waves-effect waves-light btn-dark" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </Button>
              <Button className="waves-effect waves-light btn btn-dark " onClick={()=>navigate('/signUp')}>SignUp
                <i className="material-icons right">account_circle</i>
              </Button>
            </ButtonDiv>
          </form>
        </div>
      </ContentDiv>
    </ContainerDiv>
  );
}

export default SignIn;

const ContainerDiv = styled.div({
  paddingTop: '150px',
})
const ContentDiv = styled.div({
  maxWidth: '700px',
  padding:'50px',
  borderRadius:'50px',
  backgroundColor:'rgba(255,255,255,0.5)'
})

const ButtonDiv = styled.div({
  marginLeft:'24%',
  display:'flex',
  gap:'40px'
})

const Span = styled.span({
  cursor:'pointer',
  marginLeft:'37%'
})

const Button = styled.button({
  borderRadius:'15px',
  backgroundColor:'rgba(255,255,255,0.5)',
  color:'black',
})