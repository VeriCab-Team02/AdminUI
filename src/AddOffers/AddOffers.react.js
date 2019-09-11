import React from 'react';
import { connect } from 'react-redux';
import './AddOffers.css';
import { addOffersBythunk, eventHandlerOffer } from '../OffersReducer';

const AddOffers = (props) => {

    return (
        <div className='addoffers_wrapper'>

            <label >Offer name</label>
            <input type="text" name="offerName" onChange={props.handleChange}></input>
            {/* <label >Offer Code</label>
            <input type="text" name="offerCode" onChange={props.handleChange}></input> */}
            <label >Offer validity</label>
            <input type="text" name="validity" onChange={props.handleChange}></input>
            <label >Offer Message</label>
            <input type="text" name="offerMessage" onChange={props.handleChange}></input>
            <button onClick={props.get}>Add</button>

        </div>
    );

}

const mapStateToProps = (state) => {

    
    return {
        response: state.statusCode
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(addOffersBythunk())
        },

        handleChange:(event) =>{
            eventHandlerOffer(event)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddOffers);