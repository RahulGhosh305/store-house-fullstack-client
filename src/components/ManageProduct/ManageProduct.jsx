import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-depths-20709.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setManageProduct(data))
    },[])

    return (
        <div>
            <h2>Manage Product</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageProduct.map(singleData => <TableRow singleData={singleData} key={singleData._id}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;