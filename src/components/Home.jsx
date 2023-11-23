import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosService from "../utilis/ApiService";

function Home() {
  let [page, setPage] = useState(0);
  let [name,setName] = useState('')
  let navigate = useNavigate();

  let getData = ()=>{
   let user = sessionStorage.getItem('name')
    setName(user)
  }

  useEffect(() => {
    navigate("input/I_value");
    getData()
  }, []);
  return (
    <HomeDiv className="d-flex">
      <NavDiv>
        <div>
          <Img src='https://www.shutterstock.com/image-vector/petty-cash-icon-isolated-on-260nw-2125480874.jpg' alt="pettycash" />
        </div>
        <NH4>{name}</NH4>
        <Nav.Item className="nav-set"> 
            <Nav.Link
              eventKey="link-3"
              onClick={() => {
                navigate("/forget");
              }}
            >
              <I className="material-icons right">settings</I>
              Change Password
            </Nav.Link>
          </Nav.Item>
      </NavDiv>
      <ContainerDiv className="container">
        <Nav justify variant="tabs" style={{ fontSize: "20px" }}>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className={page === 0 ? "active" : ""}
              onClick={() => {
                setPage(0), navigate("input");
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              className={page === 1 ? "active" : " "}
              onClick={() => {
                setPage(1);
                navigate("dashboard");
              }}
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              className={page === 2 ? "active" : " "}
              onClick={() => {
                setPage(2);
                navigate("cashin");
              }}
            >
              CashIn
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-4"
              className={page === 3 ? "active" : " "}
              onClick={() => {
                setPage(3);
                navigate("cashout");
              }}
            >
              CashOut
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <Outlet />
        </div>
      </ContainerDiv>
    </HomeDiv>
  );
}

export default Home;

const ContainerDiv = styled.div({
  backgroundColor:'white',
  padding: "30px",
  height: "100vh",
  width:'75%'
});

const HomeDiv = styled.div({
  backgroundColor:''
})

const NavDiv = styled.div({
  backgroundColor:'skyblue',
  width:'25%',
  height:'100vh'
})

const Img = styled.img({
  borderRadius:'170px',
  marginLeft:'70px',
  marginTop:'30px',
  width:'200px',
  border:'transperent',
  height:'200px',
  boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
})

const NH4 = styled.h4({
  fontFamily:'Abril Fatface, sanserif',
  textTransform:'capitalize',
  marginLeft:'125px'
})

const I = styled.i({
  marginRight:'90px'
})