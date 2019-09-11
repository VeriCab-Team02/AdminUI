import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState={
    list:[{}],
    isOfferLoaded:false,
    
}


export function eventHandlerOffer(event){
        
        let name = event.target.name;
        let value = event.target.value;
    console.log(name+" :"+value)
        
        restStore.dispatch(dataHandler(
            {...restStore.getState().newOffer,[name]:value}));
}

export function addOffersBythunk(){

    return function(dispatch){
            console.log("addbythunk" + restStore.getState().newOffer)
        return axios.post("http://localhost:8099/addOffers",restStore.getState().newOffer,{headers: {'Accept': 'application/json'}})
                    .then(resp=>dispatch(responseFromServer(resp.data)));

    }

}


const dataHandler=(newOffer)=>{

    console.log(" before axios  "  + restStore.getState().newOffer);
    return{
        type:'DATA_INPUT_CHANGE',
        newOffer

    }

}

const responseFromServer=(response)=>{

    return{
        type:'SERVER_RESPONSE',
        statusCode:response
    }
}


// export const DriverRegisterReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case 'SERVER_RESPONSE':
//             return Object.assign({},action);
//         case 'DATA_INPUT_CHANGE':
//             return Object.assign({},action);
//         default:
//             return state
//     }
// }



export const getOffersAction=(list,status)=>{

    return{
        type:'GET_ALL_OFFERS',
        payload: list,
        isOfferLoaded:true
    }

    
}

export const deleteOfferAction=(id)=>{
    return{
        type:'DELETE_OFFER',
        id:id,
    }
}

export function getOfferByThunk(){

    console.log("get list by thunk")
    return function(dispatch){
        console.log(restStore.getState())
        return axios.get("http://localhost:8099/viewOffers").then(resp=>{
        
        dispatch(getOffersAction(resp.data,true))
            
    
    });

    }
}

export function deleteByThunk(){
    console.log('delete');

    return axios.delete("http://localhost:8081/deleteOffer/"+restStore.getState().id)
    
}

export function deleteById(id){

    restStore.dispatch(deleteOfferAction(id));
    deleteByThunk();
}


export const offerReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_ALL_OFFERS':    
            return Object.assign({},action);
        case 'DELETE_OFFER':
            return Object.assign({},action);
        case 'SERVER_RESPONSE':
            return Object.assign({},action);
        case 'DATA_INPUT_CHANGE':
                
            return Object.assign({},action);
        default:
            return state
    }
}

let restStore= createStore(offerReducer,applyMiddleware(thunk));

export default restStore;