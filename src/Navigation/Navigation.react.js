import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './Navigation.css';
import Drivers from '../Drivers/Drivers.react';
import ShowDrivers from '../ShowDrivers/ShowDrivers.react';
import DriverRegister from '../DriverRegister/DriverRegister.react';
import History from '../History/History.react';
import ViewOffers from '../ViewOffers/ViewOffers.react';
import AddOffers from '../AddOffers/AddOffers.react';


const Navigation = () => {

    return (
        <div className='navigation_wrapper'>
             <Switch>
                    
                    <Route path="/drivers" component={Drivers}></Route>
                    <Route path="/viewHistory" component={History}></Route>
                    <Route path="/viewDrivers" component={ShowDrivers}></Route>
                     <Route path="/addDriver" component={DriverRegister}></Route> 
                     <Route path="/addOffers" component={AddOffers}></Route>
                     <Route path="/viewOffers" component={ViewOffers}></Route>  
                     
             </Switch>
        </div>
    );

}

export default Navigation;