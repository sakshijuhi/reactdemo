import * as actionTypes from './employeelistActionTypes';

const employeelistReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.EMPLOYEE_LIST_SUCCESS:
      return { ...state, employeeListInfo: action.payload };

    case actionTypes.EMPLOYEE_LIST_ERROR:
      return { ...state, employeeListInfo: action.payload };

    case actionTypes.EMPLOYEE_LIST_INPROGRESS:
      return { ...state, employeeListInfo: action.payload };

    default:
      return state;
  }
};
export default employeelistReducer;
