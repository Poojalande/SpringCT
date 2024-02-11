const initialState = {
  authToken: null,
  employeeData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authToken: action.payload,
      };
    case 'LOGOUT':
      return {
        authToken: null,
      };
    case 'EMPLOYEEDATA':
      return {
        ...state,
        employeeData: [...state.employeeData,action.payload]
        
      };
    default:
      return state;
  }
};
