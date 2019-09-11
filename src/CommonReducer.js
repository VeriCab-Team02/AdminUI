import axios from 'axios';
import { createStore, applyMiddleware ,  } from 'redux';
import thunk from 'redux-thunk';



const filterData = (FilteredData,isFiltered,temperatureData)=>{
    
    return{
        type:'FILTER_DATA',
        payLoadFiltered:FilteredData,
        isFiltered,
        payLoadData:temperatureData
    }
    
}



const inputAction = (temperatureData,cityName,status)=>{

  
    return{
        type:'GET_INPUT',
        payLoadData:temperatureData,
        payloadCityName:cityName,
        isLoaded:status
        
    }
    
}

 const getDataAction = (temperatureData,cityName,status)=>{
    //console.log(temperatureData)
    return{
        type:'GET_DATA_FROM_API',
        payloadCityName:cityName,
        payLoadData:temperatureData,
        isLoaded:status
    }

}


export function Filterdata(temperatureData){

        var x=[];
        var z=[];
        temperatureData.list.filter((e)=>{

           var tempDateValue =new Date(e.dt_txt);
            if((z.indexOf(tempDateValue.getDay())) === -1 ){
                x.push(e)
                z+=[tempDateValue.getDay()]
              
            }
            //console.log(x)
             return x;    
        })

       
combineStore.dispatch(filterData(x,true,temperatureData))

}

export function OnEnterChangeState(cityName){
    console.log(cityName)
    combineStore.dispatch(inputAction({},cityName,false))
}


export function getListFromServer(){

    return function(){
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q="+combineStore.getState().payloadCityName+"&APPID=cc9f6f60e57645be41685af7d4cba1dc")
        .then(resp=>combineStore.dispatch(getDataAction(resp.data,combineStore.getState().payloadCityName,true)))

    }
}



export const CommonReducer = (state ={
    status:true,
    isFiltered:false,
} , action) => {
    switch (action.type) {
        case 'GET_INPUT':
            return Object.assign({},action)
        case 'GET_DATA_FROM_API':
            return Object.assign({},action)
        case 'FILTER_DATA':
            return Object.assign({},action)
        default:
            return state
    }
}

let combineStore = createStore(CommonReducer,applyMiddleware(thunk,));
export default combineStore;