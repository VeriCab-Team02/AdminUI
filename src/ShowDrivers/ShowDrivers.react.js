import React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './ShowDrivers.css';
import { getListByThunk, deleteById } from '../Reducer';





const ShowDrivers = (props) => {
    console.log(props.isLoaded+"show drivers")
    console.log(props.list)
    if(!props.isLoaded){
        return(
            <div>  
                <h2>Loading..</h2>
                <button onClick={props.get}>Get data</button>
               
            </div>
        )
    } else{

        return(
            <div className="back">
                    
        {  
                        props.list.map( (eachDriver, index) => {
                            return <div className="card cardStyle shadow p-3 mb-5" key={index}>
                        {/* <div class="card-header"> </div> */}
                        <div className="card-body" >
                                <div className="row">
                                    <h6 className="DateInfoStyle col" >   {eachDriver.name} </h6>
                                    {/* <h6 className="DateInfoStyle"> {eachDriver.name}</h6> */}
                                   
                                    <Button color="default" id={"toggler"+index}   style={{ marginBottom: '1rem' }}> ViewDetails </Button>
                                        
                                        
                                    {/* <button onClick={()=>props.delete(eachDriver.id)}>Delete</button> */}
                                    <div className="PlaceRight col"><button className="fa fa-trash fa-lg trashStyle" onClick={()=>props.delete(eachDriver.driverId)}></button></div>
                                </div>

                                {/* <div id="display" className="collapse">
                                    helllooo
                                </div> */}
                        </div>
                        <UncontrolledCollapse toggler={"toggler"+index} >
                        
                                <Card className="cardStyle" >
                                    <CardBody className="cardBodyStyle" >
                                        <div className="row" >
                                            <div className="PlaceLeft col" ><i className="fa fa-user " ></i><b>  {eachDriver.name}</b></div>
                                            <div className="PlaceRight col"><i className="fa fa-star" ></i>  {eachDriver.rating}</div>
                                            
                                        </div>

                                        
                                        <div className="row" >
                                            <div className="PlaceLeft col"><i className="fa fa-calendar" ></i>  {eachDriver.dob}</div>
                                        </div>

                                        <div className="row" >
                                            <div className="PlaceLeft col"><i className="fa fa-envelope" ></i>  {eachDriver.email}</div>
                                        </div>

                                        <div className="row " >
                                            <div className="PlaceLeft col"><i className="fa fa-phone" key={index}></i>  {eachDriver.phoneNumber}</div>
                                        </div>

                                        
                                            <br/>
                                        <div className="row">
                                            <div className="LicenseInfoStyle col">License No :  {eachDriver.licenseNumber}</div>
                                            {/* <div className="PlaceRight col"><button className="fa fa-trash fa-lg trashStyle" onClick={console.log("Delete Clicked")}></button></div> */}
                                        </div>
                                    </CardBody>
                                </Card>
                         </UncontrolledCollapse>
                        </div>
                        })}
                        </div>
                       
        
        )}

}
                            

const mapStateToProps = (state) => {
    console.log(state.isLoaded+"==============================================")
    
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(getListByThunk())
        },

        delete: (id) => {
            console.log("delelte  props "+id)
            deleteById(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDrivers);