import React from 'react';

import './DisplayHourlyDetails.css';

const DisplayHourlyDetails = (props) => {
    
    var returnTime = (e)=>{

        var time = new Date(e);
        return time.toTimeString()
    }
    
     return (
        
        <div className='displayhourlydetails_wrapper'>
<div className="d-flex flex-row justify-content-center">

        {props.DataObject.map((e,key)=>
    
    <div className="p-2" key={key}>
       
        <div className="card" key={key}>
        
            <div className="card-body" key={key}>
            {returnTime(e.dt_txt)}
          <img src={"http://openweathermap.org/img/wn/"+ e.weather[0].icon+".png"} alt="BOOM"/>
       
       
           
       <p className="p1"><b>Min </b>{parseInt(e.main.temp_min)-273}&#176;C     
       <b>  Max </b>
       {parseInt(e.main.temp_max)-273}&#176;C</p> 

       </div>
       </div>
      
       </div>

              )}
    
      
    </div>

    </div>
    )}

export default DisplayHourlyDetails;