import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import {useHistory, useParams} from "react-router-dom";
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { productId } = useParams();
    const [checkoutProduct, setCheckoutProduct] = useState({})
    const {imageURL, name, weight, price} = checkoutProduct
    
    useEffect(()=>{
        fetch(`https://mysterious-depths-20709.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setCheckoutProduct(data[0]))
    },[productId])

    const History = useHistory()
    const checkoutHandle = () => {
        console.log("Checkout Clicked email", loggedInUser.email );
        const email = loggedInUser.email
        const checkoutProductWithUserDetails = {loggedInUser, name, price, imageURL , email, Time : new Date()}
        console.log(loggedInUser, name, price, imageURL, email);

        fetch('https://mysterious-depths-20709.herokuapp.com/checkoutToOrdered',{
            method : 'POST',
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(checkoutProductWithUserDetails),
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Your Checkout Product Ordered SuccessFully...")
                History.push('/order')
            }
        })
    }

    return (
        <div>
            <Header />
            <div className="container mt-3">
            <h2 className="text-center font-weight-bold">Checkout</h2>
                <div style={{justifyContent:"center", display: "flex"}}>
                    <div className="card mb-3 shadow p-2" style={{maxWidth : "540px"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={imageURL} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <h5 className="card-text"><small className="text-muted">Weight : {weight}Kg</small></h5>
                                    <h5 className="card-text"><small className="text-muted">Quantity : 1</small></h5>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <h4 className="card-text">Price : {price}Taka</h4>
                                        <button type="button" className="btn btn-primary" onClick={()=>checkoutHandle()}>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;