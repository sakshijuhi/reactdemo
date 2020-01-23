
import { combineReducers } from 'redux';
import employeedetailsReducer from './Dashboard/employeedetails/employeedetailsReducer';
import employeelistReducer from './Dashboard/employeelist/employeelistReducer';

const rootReducer = combineReducers({
    employeedetailsReducer,
    employeelistReducer
});

export default rootReducer;
