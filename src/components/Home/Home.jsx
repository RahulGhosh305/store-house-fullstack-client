import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import HomeProductCart from '../HomeProductCart/HomeProductCart.jsx';
import Spinner from '../../image/spinner.gif';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [allProduct, setAllProduct] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-depths-20709.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setAllProduct(data)
            setLoading(false)
        })
    },[])

    return (
        <div>
           <Header search="true"/> 
           <div className="container">
                <div className="row justify-content-around">
                {
                    loading ? <img src={Spinner} alt=""/> : allProduct.map(singleProduct => <HomeProductCart singleProduct={singleProduct} key={singleProduct._id}/>)
                }
                </div>
           </div>
        </div>
    );
};

export default Home;