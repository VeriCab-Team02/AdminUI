import React from 'react';
import {connect} from 'react-redux';
import './UserFields.css';
import {Link,withRouter} from 'react-router-dom';
//import {r} from 'react-router';
const UserFields = (props) => {
    var day = ['sun','mon','tue','wed','thurs','fri','sat'] ;
    const getWeatherDay=(date)=>{
        var d = new Date(date);
        return d.getDay()
    }
    if(props.isdataFiltered){
     
        return (
       
            <div className='userfields_wrapper'>
                   

                <button className="btn" onClick={props.action} >Search</button>
    <div className="d-flex flex-row justify-content-center">

        {props.data.map((e,key)=>
    
    <div className="p-2" key={key}>
       
        <div className="card" key={key}>
        
            <div className="card-body" key={key}>
            <h5>
            {day[getWeatherDay(e.dt_txt)].toUpperCase()}
            </h5>
           <Link to={"/getData/"+key} ><img src={"http://openweathermap.org/img/wn/"+ e.weather[0].icon+".png"} alt="BOOM"/></Link>
       <p className="p1">{parseInt(e.main.temp_min)-273}&#176;{parseInt(e.main.temp_max)-273}&#176;</p>
       
      
      
       
        </div>
      
        </div>
        
        </div>       )}
    
      
    </div>
   
            </div>
        );
     
    }

    return (
        <div className='userfields_wrapper'>
<button className="btn" onClick={props.action}>Search</button>

        </div>
        
    );

}


const mapStateToProps = (state) => {

    return {
        data: state.payLoadFiltered,
        isdataFiltered: state.isFiltered
    }
}


export default withRouter(connect(mapStateToProps)(UserFields));