import { useState } from "react";
import styled from "styled-components";
import AxiosService from "../../utilis/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Cash() {
  let [cash, setAmount] = useState(0);
  let [Notes, setNotes] = useState("");

  let navigate = useNavigate()

  let addCash = async (e) => {
    e.preventDefault();
    try {
      let Amount = + cash
      console.log(typeof Amount)
      console.log(Amount)
     let res = await AxiosService.put('/data/cashIn',{
      Amount,
      Notes
     })
     if(res.status === 200){
      toast.success('Cash Added')
      let id = window.location.pathname.split("/");
      let _id = id.slice(0,-2).join('/');
      navigate(_id+'/dashboard')
     }
    //  console.log(res)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  };

  let removeCash = async (e) => {
    e.preventDefault();
    try {
      let Amount = + cash
      console.log(typeof Amount)
      console.log(Amount)
     let res = await AxiosService.put('/data/cashOut',{
      Amount,
      Notes
     })
     if(res.status === 200){
      toast.success('Cash Added')
      let id = window.location.pathname.split("/");
      let _id = id.slice(0,-2).join('/');
      navigate(_id+'/dashboard')
     }
    //  console.log(res)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  };

  return (
    <ContainerDiv className="container">
      <InputDiv class="row">
        <H4>Expences</H4>
        <Form className=" m-3 ">
          <div className="row">
            <div className="input-field col s6 ">
              <i className="material-icons prefix">monetization_on</i>
              <input
                type="number"
                className="validate"
                onChange={(e) => setAmount(e.target.value)}
              />
              <label>Amount</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">comment</i>
              <input
                type="text"
                className="validate"
                onChange={(e) => setNotes(e.target.value)}
              />
              <label>Notes</label>
            </div>
          </div>
          <ButtonDiv className="S-btn">
            <button
              className="btn waves-effect waves-light greenbtn"
              type="submit"
              name="action"
              onClick={(e) => addCash(e)}
            >
              CashIn
              <i className="material-icons right">send</i>
            </button>
            <button
              className="btn waves-effect waves-light redbtn"
              type="submit"
              name="action"
              onClick={(e)=>removeCash(e)}
            >
              CashOut
              <i className="material-icons right">send</i>
            </button>
          </ButtonDiv>
        </Form>
      </InputDiv>
    </ContainerDiv>
  );
}

export default Cash;

const ContainerDiv = styled.div({
  backgroundColor:'rgba(255,255,255,0.8)',
  marginTop: "80px",
  maxWidth: "600px",
  minWidth: "100px",
  height: "400px",
  border:'transparent',
  borderRadius:'50px',
  boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
});
const InputDiv = styled.div({
  display: "grid",
  justifyContent: "center",
});

const H4 = styled.h5({
  marginLeft: "160px",
  marginTop:'50px',
  color:'black'
});

const ButtonDiv = styled.div({
  display: "flex",
  gap: "20px",
  marginLeft: "90px",
  marginTop: "20px",
});

const Form = styled.form({
  width: "400px",
});
