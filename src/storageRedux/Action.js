export const login = (userName, password) => {
  let token = null;
  // if(userName === 'eve.holt@reqres.in'){
  token = userName + password;
  // }
  return {
    type: 'LOGIN',
    payload: token,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const addEmployeeData = (data) => {
    return{
       type : 'EMPLOYEEDATA',
       payload: data
    }
}
