import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTableData,
  resetSelectedTableData,
} from "../store/action/tableDataAction";
import { Alert } from "./Alert";

function UserTableForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table);
  const userDetails = useSelector((state) => state.loggedUserDetails);
  const selectedTableData = data?.selectedTableData;
  const user = userDetails?.user;
  const [session, setSession] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = () => {
    const tableData = {
      session,
      sessionType,
      attendedBy: user.userName,
      remarks,
    };
    if (session === "" && sessionType === "" && remarks === "") {
      Alert("Sorry!", "Please fill all fields", "error");
      return;
    } else if (selectedTableData) {
      const allTableData = data?.tableData;
      allTableData.splice(selectedTableData.index, 1, tableData);
      dispatch(resetSelectedTableData());
      resetState();
    } else {
      Alert("Good job", "Form submitted successfully", "success");
      dispatch(resetSelectedTableData());
      dispatch(getTableData(tableData));
      resetState();
    }
  };

  useEffect(() => {
    if (selectedTableData) {
      setSession(selectedTableData.session);
      setSessionType(selectedTableData.sessionType);
      setRemarks(selectedTableData.remarks);
    }
  }, [selectedTableData]);

  const resetState = () => {
    setSession("");
    setSessionType("");
    setRemarks("");
  };

  return (
    <section
      style={{
        padding: "20px",
        border: "1px solid lightgrey",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <div>
        <h1
          style={{
            color: "purple",
            marginBottom: "20px",
          }}
        >
          User trainer assign form
        </h1>
        <div>
          <TextField
            fullWidth
            label="Training session"
            placeholder="enter your session here"
            color="secondary"
            margin="normal"
            value={session}
            onChange={(e) => setSession(e.target.value)}
          />

          <FormControl fullWidth color="secondary" margin="normal">
            <InputLabel id="demo-simple-select-label" color="secondary">
              Class
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sessionType}
              label="class"
              onChange={(e) => setSessionType(e.target.value)}
            >
              <MenuItem value={"online"}>Online</MenuItem>
              <MenuItem value={"offline"}>Offline</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Session attended by"
            placeholder="enter your remarks here"
            color="secondary"
            margin="normal"
            value={user.userName}
            disabled
          />
          <TextField
            fullWidth
            label="Session remarks"
            placeholder="enter your remarks here"
            color="secondary"
            margin="normal"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            {selectedTableData && selectedTableData ? "Update" : "Submit"}
          </Button>
          <Button
            variant="contained"
            color="gray"
            onClick={() => {
              dispatch(resetSelectedTableData());
              resetState();
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UserTableForm;
