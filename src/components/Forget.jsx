import React, { useState } from "react";
import styled from "styled-components";
import AxiosService from "../utilis/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { configDotenv } from "dotenv";

function Forget() {

    let [email,setEmail] = useState('')

    let navigate = useNavigate()

    let handleSend = async(e)=>{
        e.preventDefault()
        try {
            let res = await AxiosService.post('/user/forget',{
                email
            })
            if(res.status === 200){
                toast.success('Mail Send Successfully')
                navigate('/')
            }else if(res.status === 400){
              toast.warning('invliad email')
            }
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error)
        }
    }
  return (
    <NavDiv className="container" id="signIn">
      <ContentDiv className="row align-items-center">
        <form className=" m-auto" onSubmit={(e) => handleSend(e)}>
          <div className="row">
            <div className="input-field col s6 ">
              <i className="material-icons prefix">mail</i>
              <input
                type="email"
                className="validate"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
          </div>
          <BDiv className="S-btn">
            <Button
              className="btn waves-effect waves-light btn-dark "
              type="submit"
              name="action"
            >
              Send
              <i className="material-icons right">send</i>
            </Button>
          </BDiv>
        </form>
      </ContentDiv>
    </NavDiv>
  );
}

export default Forget;

const NavDiv = styled.div({
  paddingTop: "200px",
});
const ContentDiv = styled.div({
  marginTop:'-40px',
  maxWidth: '700px',
  minHeight:'400px',
  padding:'50px',
  borderRadius:'50px',
  backgroundColor:'rgba(255,255,255,0.3)'
})

const BDiv = styled.div({
  marginLeft: "40%",
  display: "flex",
  gap: "40px",
});
const Button = styled.button({
  borderRadius:'15px',
  backgroundColor:'rgba(255,255,255,0.5)',
  color:'black',
})
