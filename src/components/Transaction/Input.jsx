import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Outlet, useNavigate } from "react-router-dom";

function Input() {
  let [page, setPage] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    navigate("I_value");
  }, []);
  return (
    <div>
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            className={page === 0 ? "active" : ""}
            onClick={() => {
              setPage(0), navigate("I_value");
            }}
          >
            InitialValue
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            className={page === 1 ? "active" : " "}
            onClick={() => {
              setPage(1);
              navigate("cash");
            }}
          >
            Expences
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Input;
