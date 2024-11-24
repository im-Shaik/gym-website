import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { TbHttpDelete, TbEditOff } from "react-icons/tb";
import {
  deleteTableData,
  selectedTableData,
} from "../store/action/tableDataAction";

function UserTableData() {
  const dispatch = useDispatch();
  const tableRow = useSelector((state) => state.table);
  const userDetails = useSelector((state) => state.loggedUserDetails);
  const user = userDetails?.user;

  let rows = tableRow?.tableData.filter(
    (data) => data.attendedBy === user.userName
  );

  const handleDeleteTable = (index) => {
    const allRows = tableRow?.tableData;
    allRows.splice(index, 1);
    dispatch(deleteTableData(allRows));
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        margin: "40px 0",
        padding: "15px",
        border: "1px solid lightgrey",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          color: "purple",
          marginBottom: "15px",
        }}
      >
        Table feedback here!
      </h2>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Session
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Session type
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Remarks
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Action's
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.session}
                </TableCell>
                <TableCell align="right">{row.sessionType}</TableCell>
                <TableCell align="right">{row.remarks}</TableCell>
                <TableCell align="right">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TbHttpDelete
                      size={24}
                      style={{
                        color: "purple",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleDeleteTable(index);
                      }}
                    />
                    <TbEditOff
                      size={24}
                      style={{
                        color: "purple",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(selectedTableData({ ...row, index }));
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{
                  padding: "10px",
                }}
              >
                No records here, Data will show here.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTableData;
