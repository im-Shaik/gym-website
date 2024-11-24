export const getPlanFromListedData = (data) => async (dispatch) => {
  dispatch({
    type: "SELECTED_PLAN",
    payload: data,
  });
};
export const clearPlanFromListedData = (data) => async (dispatch) => {
  dispatch({
    type: "CLEAR_SELECTED_PLAN",
    payload: data,
  });
};
