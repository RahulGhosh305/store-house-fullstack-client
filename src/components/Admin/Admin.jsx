import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons'
import AddProduct from '../AddProduct/AddProduct';
import './Admin.css'
import ManageProduct from '../ManageProduct/ManageProduct';
import Header from '../Header/Header';

const Admin = () => {
    const [showComponent, setShowComponent] = useState(null)
    console.log(showComponent);
    const manageProductClicked = (falsy) => {
        setShowComponent(falsy)
    }

    const addProductClicked = (truthy) => {
        setShowComponent(truthy)
    }

    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-5 col-12" id="sideBar" style={{height: '100vh', backgroundColor: '#11214d'}}>
                        <h4 className="text-center text-white mt-2">Store House</h4>
                        <div className="mt-3">

                            <button onClick={() => manageProductClicked(false)} type="button" className="btn btn-outline-primary w-100 mb-1">
                                <FontAwesomeIcon className="mr-1" icon={faTasks} />Manage Product
                            </button>

                            <button onClick={() => addProductClicked(true)} type="button" className="btn btn-outline-primary w-100 mb-1">
                                <FontAwesomeIcon className="mr-1" icon={faPlusSquare} />Add Product
                            </button>

                            <button type="button" className="btn btn-outline-primary w-100">
                                <FontAwesomeIcon className="mr-1" icon={faPen} /> Edit Product
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-7 col-12">
                        {
                            showComponent === true ? <AddProduct/> : <ManageProduct/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;