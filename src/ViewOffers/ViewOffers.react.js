import React from 'react';
import { connect } from 'react-redux';
import './ViewOffers.css';
import { getOfferByThunk, deleteById } from '../OffersReducer';

class ViewOffers extends React.Component {
 

    render() {if(!this.props.isLoaded){
        return(
            <div>  
                <h2>Loading..</h2>
                <button onClick={this.props.get}>Get data</button>
               
            </div>
        )
    } else{


    return (
        <div className='viewoffers_wrapper'>
            <p>Show offers</p>

            {
                this.props.list.map((eachOffer,index) => {
                    return <div key={index}>
                            <p>{eachOffer.offerName}</p>
                            <button onClick={()=>this.props.delete(eachOffer.offerCode)}>Delete</button>
                        </div>
                })
            }



        </div>
    );

}
}

}
const mapStateToProps = (state) => {
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(getOfferByThunk())
        },

        delete: (id) => {
            console.log("delelte  props "+id)
            deleteById(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffers);