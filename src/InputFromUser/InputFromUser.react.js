import React from 'react';
import {connect,} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './InputFromUser.css';
import UserFields from '../UserFields/UserFields.react';
import {getListFromServer,OnEnterChangeState,Filterdata} from '../CommonReducer';


class InputFromUser extends React.Component {
    
    render() {
        if(!this.props.isLoaded){
            return (
           
                <div className='inputfromuser_wrapper'>
                    <div className="jumbotron">
                    <h1>WEATHERMAN REACT FLAVORED</h1><br/>
                    <input  onChange={e=>this.props.getInput(e.target.value)} placeholder="Enter City Name here"></input>
                    </div>
    <UserFields action={this.props.getData}></UserFields>
    
                </div>
            );
        }
        else{
           
            return (
           
                <div className='inputfromuser_wrapper'>
                     <div className="jumbotron">
                         <h1>WEATHERMAN REACT FLAVORED</h1><br/>
                    <input  onChange={e=>this.props.getInput(e.target.value)}></input>
                    </div>
                  
            <UserFields  data={this.props.filterData(this.props.temperatureData)}>
            
            </UserFields>
            

                </div>
            );
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.payloadCityName,
        temperatureData: state.payLoadData,
        isLoaded: state.isLoaded,
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getListFromServer())
        },

       getInput:(cityName)=>{
        OnEnterChangeState(cityName)
       },

       filterData:(temperatureData)=>{
        Filterdata(temperatureData)
       },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputFromUser));