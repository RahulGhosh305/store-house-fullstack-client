import React from 'react';
import { useHistory } from "react-router-dom";

const HomeProductCart = (props) => {
    const history = useHistory();
    const buyNowHandler = (productId) => {
        history.push(`/checkout/${productId}`);
    }
    const {name, price, weight, imageURL, _id} = props.singleProduct
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card m-3 shadow">
                <img style={{height: '260px'}}  src={imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">Weight : {weight}kg</h6>
                    <div className="d-flex justify-content-between align-items-center"> 
                        <h4 className="card-text">{price}tk</h4>
                        <button type="button" className="btn btn-primary" onClick={() => buyNowHandler(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProductCart;