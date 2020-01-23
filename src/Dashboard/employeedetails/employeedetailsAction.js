import * as actionTypes from './employeedetailsActionTypes';
import axios from 'axios';
const details ={
    
}
export function getEmployeeDetails(id){
    return function(dispatch){
         const headers = {
           'Content-Type': 'application/json'
         };
         dispatch({ type: actionTypes.EMPLOYEEDEATAILS_INPROGRESS, payload: {} });
         return axios
           .get('https://jsonplaceholder.typicode.com/users/'+id, { headers })
           .then(response => {
                 dispatch({ type: actionTypes.EMPLOYEEDEATAILS_SUCCESS, payload: response.data });
           });
    }
}