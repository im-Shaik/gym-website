import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { user } from "../store/action/userAction";
import { Alert } from "./Alert";

function PaymentMethod() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loggedUserDetails);
  const plan = useSelector((state) => state.plan);

  const profile = data?.user;
  const selectedPlanFromUser = plan?.selectedPlan;

  const { id, name, userName } = profile;
  const { planName, duration, paymentType, price } = selectedPlanFromUser;

  const handlePayNow = () => {
    const paidUser = {
      ...profile,
      ...selectedPlanFromUser,
      paymentStatus: true,
    };

    const data = JSON.parse(localStorage.getItem("userDetails"));
    const updatedData = data.map((user) => (user.id === id ? paidUser : user));
    dispatch(user(paidUser));
    localStorage.setItem("userDetails", JSON.stringify(updatedData));
    Alert("Good job!", "Successfully paid", "success");

    navigate(`/userDashboard/id?${id}?$isPaid=?$True`);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "purple",
        }}
      >
        Payment page
      </h1>
      <TableContainer
        component={Paper}
        style={{
          width: "800px",
          border: "1px solid lightgrey",
          tableLayout: "fixed",
          borderCollapse: "collapse",
        }}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                User ID
              </TableCell>
              <TableCell>{id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Name
              </TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Username
              </TableCell>
              <TableCell>{userName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Plan name
              </TableCell>
              <TableCell>{planName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Duration
              </TableCell>
              <TableCell>{duration} - Months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Payment type
              </TableCell>
              <TableCell>{paymentType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#EFEFEF",
                  width: "200px",
                }}
              >
                Price
              </TableCell>
              <TableCell>$ {price}Rs</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button variant="contained" color="secondary" onClick={handlePayNow}>
          Pay Now
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "grey",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default PaymentMethod;
