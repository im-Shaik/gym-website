export const loginUser = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_USER",
    payload: data,
  });
};
export const logoutUser = (data) => async (dispatch) => {
  dispatch({
    type: "LOGOUT_USER",
    payload: data,
  });
};
