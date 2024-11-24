const initialState = {
  tableData: [],
  selectedTableData: null,
};

export const tableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TABLE_DATA":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
        selectedTableData: null,
      };
    case "DELETE_TABLE_DATA":
      return { ...state, tableData: action.payload };
    case "SELECTED_TABLE_DATA":
      return {
        ...state,
        selectedTableData: action.payload,
      };
    case "RESET_SELECTED_TABLE_DATA":
      return {
        ...state,
        selectedTableData: null,
      };
    default:
      return state;
  }
};
