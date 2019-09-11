 import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState={
    isLoaded:false,
    list:[{}]
}



export const getDriverAction=(list,status)=>{
    console.log("in get action" +status +" ** before GET_ALL_DRIVERS")
    return{
        type:'GET_ALL_DRIVERS',
        payload: list,
        isLoaded:status
    }

    
}

export const deleteDriverAction=(id)=>{
    return{
        type:'DELETE_DRIVER',
        id:id,
    }
}

export function getListByThunk(){

    console.log("get list by thunk")
    return function(dispatch){
        console.log(restStore.getState())
        return axios.get("http://localhost:8080/viewDrivers")
        .then(resp=>dispatch(getDriverAction(resp.data,true)));

    }
      
}

export function deleteByThunk(id){
   
console.log(id);
    return axios.delete("http://localhost:8080/deleteDriver/"+id)
    
}

export function deleteById(id){

   
    deleteByThunk(id);
}

// const responseFromServer=(response)=>{

//     return{
//         type:'SERVER_RESPONSE',
//         statusCode:response
//     }
// }

export const driverReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case 'GET_ALL_DRIVERS':
            return Object.assign({},action);
        case 'DELETE_DRIVER':
            return Object.assign({},action);
        // case 'SERVER_RESPONSE':
        //     return Object.assign({},action);
        // case 'DATA_INPUT_CHANGE':
        //     return Object.assign({},action);
        default:
            return state
    }
}

let restStore= createStore(driverReducer,applyMiddleware(thunk));

export default restStore;