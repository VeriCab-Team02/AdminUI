import axios from 'axios';
import { createStore, applyMiddleware ,  } from 'redux';
import thunk from 'redux-thunk';







export function eventHandlerCar(event){
    let name = event.target.name;
    let value = event.target.value;

    restStoretoAddDriver.dispatch(dataHandler(true,restStoretoAddDriver.getState().newDriver
        ,{...restStoretoAddDriver.getState().Car,[name]:value}));
}

export function eventHandlerDriver(event){
        
        let name = event.target.name;
        let value = event.target.value;

        
        restStoretoAddDriver.dispatch(dataHandler(false,
            {...restStoretoAddDriver.getState().newDriver,[name]:value},{}));
}

export function addDriversBythunk(){

    return function(dispatch){
            
        return axios.post("http://localhost:8080/viewDrivers/{page}/{size}")
                    .then(resp=>dispatch(responseFromServer(resp.data)));

    }

}

const initialState= {
    newDriver : {},
    Car : {}
}

const dataHandler=(newDriver,Car)=>{

 
    return{
        type:'DATA_INPUT_CHANGE',
        newDriver,
        Car

    }

}



const responseFromServer=(response)=>{

    return{
        type:'SERVER_RESPONSE',
        statusCode:response
    }
}


export const DriverRegisterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SERVER_RESPONSE':
            return Object.assign({},action);
        case 'DATA_INPUT_CHANGE':
            return Object.assign({},action);
        default:
            return state
    }
}

let restStoretoAddDriver = createStore(DriverRegisterReducer,applyMiddleware(thunk));
export default restStoretoAddDriver;