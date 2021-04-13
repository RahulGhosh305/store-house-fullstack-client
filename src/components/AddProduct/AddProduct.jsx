import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const singleProductData = {
            name : data.productName,
            price : data.price,
            weight : data.weight,
            imageURL : imageURL 
        }
        const url = `https://mysterious-depths-20709.herokuapp.com/addProduct`;
        console.log(singleProductData)
        fetch(url, {
            method : "POST",
            headers: {
                "content-type" : "application/json",
            },
            body : JSON.stringify(singleProductData)
        })
        .then(res => {
            console.log('Server side response', res);
        })
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'b50fd7620e289efed3e7d89f68f9e2ab')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(res => {
            setImageURL(res.data.data.display_url);
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    

    return (
        <div className="d-flex justify-content-center p-2 mt-3">
            <form onSubmit={handleSubmit(onSubmit)} className='shadow p-2'>
                <h2 className="text-center mb-3">Add Product</h2>
                <h5>Product Name :</h5>
                <input className="form-control" type="text" {...register("productName", { required: true })} placeholder="Enter Name"/>
                {errors.productName && <span>This field is required</span>}
                <br/>

                <h5>Price :</h5>
                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Enter Price"/>
                {errors.price && <span>This field is required</span>}
                <br/>

                <h5>Weight :</h5>
                <input className="form-control" type="number" {...register("weight", { required: true })} placeholder="Enter Weight"/>
                {errors.weight && <span>This field is required</span>}
                <br/>

                <input type="file" name="picture" onChange={handleImageUpload}/>
                <br/>
                <br/>
                <input className="form-control bg-success text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;