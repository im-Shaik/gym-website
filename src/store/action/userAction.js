export const user = (data) => async (dispatch) => {
  dispatch({
    type: "USER_DATA",
    payload: data,
  });
};
export const clearUser = (data) => async (dispatch) => {
  dispatch({
    type: "CLEAR_DATA",
    payload: data,
  });
};
