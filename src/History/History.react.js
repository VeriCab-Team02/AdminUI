import React from 'react';

import './History.css';
import axios from 'axios';



class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:166,
            trips:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:9000//allHistory')
          .then(res => {
            const trips = res.data;
            this.setState({ trips });
          })

          
      }
    

    render() {
        return (
            <div className='history_wrapper'>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                    <h5 style={{color:'white'}}> Your Past Trips</h5>
                </nav>
            
                <div>
                   
                    <div> 
                        {  
                        this.state.trips.map( (eachTrip, key) => {
                            return <div class="card cardStyle shadow p-3 mb-5" key={key}>
                        {/* <div class="card-header"> </div> */}
                        <div class="card-body" key={key}>
                                <div className="row" key={key}>
                                    <h6 className="DateInfoStyle col" key={key}> {eachTrip.dateAndTimeOfTrip}</h6>
                                    <h6 className="FareInfoStyle col" key={key}> Rs {eachTrip.fare}</h6>
                                </div>

                            <div className="row" key={key}>
                                <div className="col justify-content-center" key={key}>
                                <label className="PassengerInfoStyle" key={key}> {eachTrip.passengerName}  </label>
                                </div>
                            </div>

                            {/* Trip Location Details */}
                            <div className="row justify-content-center" key={key}> 
                                <label className="dot1" key={key}></label>  &nbsp; &nbsp;
                                <label> {eachTrip.sourceLocation} </label>
                            </div>
                                
                                <div className="row justify-content-center" key={key}>
                                    <label className="dot2" key={key}></label> &nbsp; &nbsp;
                                    <label> {eachTrip.passengerName} </label>
                                </div>
                        
                        </div>
                        </div>
                        })
                        }
                    </div>
                
                </div> 
            </div>
        );
    }
}

export default History;