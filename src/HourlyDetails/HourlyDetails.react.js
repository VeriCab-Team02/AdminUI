import React from 'react';
import {connect} from 'react-redux';
import './HourlyDetails.css';
import DisplayHourlyDetails from '../DisplayHourlyDetails/DisplayHourlyDetails.react';
import {Link,withRouter} from 'react-router-dom';
class HourlyDetails extends React.Component {
    
    HourlyDataFilter  = ()=>{
        var temp2 = new Date(this.props.filteredData[this.props.match.params.id].dt_txt) //HOURLY DATA FILTERING BY COMPARING TO CURRENT DATE
        var x=[] //returning storage array
        this.props.DataSet.list.filter((e)=>{

            var tempDateValue =new Date(e.dt_txt)
            //console.log(tempDateValue.getTime())
             if(tempDateValue.getDay() === temp2.getDay()){
                 x.push(e) }
                 //console.log(x)
             return x
    })
return x
}


    render() {
        
        return (
            <div className='hourlydetails_wrapper'>
<h1>DETAILS FOR EVERY THREE HOURS</h1>
<DisplayHourlyDetails DataObject={this.HourlyDataFilter()}></DisplayHourlyDetails>

<Link className = "button btn" to="/">GO BACK</Link>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
            filteredData: state.payLoadFiltered,
            DataSet: state.payLoadData
}
}


export default withRouter(connect(mapStateToProps)(HourlyDetails))

