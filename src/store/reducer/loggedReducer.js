const initialState = {
  isLoggedIn: false,
  user: null,
};

export const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
