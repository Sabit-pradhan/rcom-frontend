import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProductDetails = async () => {
            console.warn(params);
            let result = await fetch(`http://localhost:5000/product/${params.id}`, {
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            setName(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
        };

        getProductDetails();
    }, [params.id, params]); // Include params in the dependency array

    const updateProduct = async () => {
        console.warn(name, price, category, company);

        // Use backticks instead of single quotes for the template string
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.warn(result);
        navigate('/')

        // Add your logic for updating the product
    };

    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputbox"
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product Price" className="inputbox"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product Category" className="inputbox"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product Company" className="inputbox"
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />

            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    );
};

export default UpdateProduct;
