import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderTableRow from './OrderTableRow';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser.email);
    const [ordersProducts, setOrderProducts] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/orderItems?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderProducts(data))
    },[loggedInUser.email])
    

    return (
        <div>
            <Header/>
            <h3 className="text-center mt-2">Welcome {loggedInUser.name}! Yours Ordered Items</h3>
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">Product Image </th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersProducts.map(singleOrdered => <OrderTableRow singleOrdered={singleOrdered} key={singleOrdered._id}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;