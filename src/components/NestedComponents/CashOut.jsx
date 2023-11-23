import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AxiosService from "../../utilis/ApiService";
import styled from "styled-components";

function CashOut() {
  let [amount, setAmount] = useState([]);

  let getData = async () => {
    try {
      let res = await AxiosService.get("/data/getDataByCashOut");
      if (res.status === 200) {
        setAmount(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ContainerDiv className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Amount</th>
            <th>Notes</th>
            <th>Method</th>
            <th>Time</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {amount.map((e, i) => (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>{e.Amount}</td>
              <td>{e.Notes}</td>
              <td>{e.method}</td>
              <td>{e.createdAt}</td>
              <td>{e.Total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ContainerDiv>
  );
}

export default CashOut;

const ContainerDiv = styled.div({
  marginTop:'50px',
  padding:'50px',
  border:'transparent',
  borderRadius:'50px',
  boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
})