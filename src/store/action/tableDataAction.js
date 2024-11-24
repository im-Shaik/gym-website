export const getTableData = (data) => async (dispatch) => {
  dispatch({
    type: "GET_TABLE_DATA",
    payload: data,
  });
};
export const deleteTableData = (data) => async (dispatch) => {
  dispatch({
    type: "DELETE_TABLE_DATA",
    payload: data,
  });
};
export const selectedTableData = (data) => async (dispatch) => {
  dispatch({
    type: "SELECTED_TABLE_DATA",
    payload: data,
  });
};
export const resetSelectedTableData = (data) => async (dispatch) => {
  dispatch({
    type: "SELECTED_TABLE_DATA",
    payload: data,
  });
};
