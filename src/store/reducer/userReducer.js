const initialState = {
  user: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        user: action.payload,
      };

    case "CLEAR_DATA":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
