import * as actionTypes from './employeedetailsActionTypes';

const employeedetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.EMPLOYEEDEATAILS_SUCCESS:
      return { ...state, employeeDetailsInfo: action.payload };

    case actionTypes.EMPLOYEEDEATAILS_ERROR:
      return { ...state, employeeDetailsInfo: action.payload };

    case actionTypes.EMPLOYEEDEATAILS_INPROGRESS:
      return { ...state, employeeDetailsInfo: action.payload };

    default:
      return state;
  }
};
export default employeedetailsReducer;
