import * as actionTypes from './employeelistActionTypes';
import axios from 'axios';
const details ={
    
}
export function getEmployeeList(){
    return function(dispatch){
         const headers = {
           'Content-Type': 'application/json'
         };
         dispatch({ type: actionTypes.EMPLOYEE_LIST_INPROGRESS, payload: [] });
         return axios
           .get('https://jsonplaceholder.typicode.com/users', { headers })
           .then(response => {
                 dispatch({ type: actionTypes.EMPLOYEE_LIST_SUCCESS, payload: response.data });
           });
    }
}