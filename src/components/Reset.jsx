import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosService from '../utilis/ApiService'
import { useState } from "react";
import {toast} from 'react-toastify'


function SignIn() {

    let [Password, setPassword] = useState("");
    let [CPassword, setCPassword] = useState("");
    let navigate = useNavigate();
  
    let ResetPassword = async (e) => {
      e.preventDefault();
  
      if (Password === CPassword) {
        try {
          let id = window.location.pathname.split("/");
          let _id = id[id.length - 1];
          console.log(_id);
          let res = await AxiosService.put(`/user/reset/${_id}`,{
            Password  
          })
          if (res.status === 200) {
            toast.success("Password Update Successfully");
            navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warning("Password not match");
      }
    };
  return (
    <ContainerDiv className="container" id="signIn">
      <ContentDiv className="row align-items-center">
        <div>
          <form className=" m-3 " onSubmit={(e)=>ResetPassword(e)} >
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix">lock</i>
                <input type="password"  className="validate"  onChange={(e)=>setPassword(e.target.value)}/>
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
            <ButtonDiv className="S-btn">
              <Button className="btn waves-effect waves-light btn-dark" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
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

const Button = styled.button({
  borderRadius:'15px',
  backgroundColor:'rgba(255,255,255,0.5)',
  color:'black',
  marginLeft:'80px'
})