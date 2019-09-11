import React from 'react';

import './Drivers.css';
import {Link} from 'react-router-dom';

const Drivers = () => {

    return (
        <div className='drivers_wrapper'>
           
            <div className="links">
            <button className="btn btn-light"><Link to="/addDriver">Add Driver</Link></button>
            <button className="btn btn-light"><Link to="/viewDrivers">View Drivers</Link></button>
            <button className="btn btn-light"><Link to="/viewHistory">History Overview</Link></button>
            <button className="btn btn-light"><Link to="/addOffers">Add offers</Link></button>
            <button className="btn btn-light"><Link to="/viewOffers">View Offers</Link></button>
            </div>

            
        </div>
    );

}

export default Drivers;