import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const handlerAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product
                product={product}
                key={product.id}
                handlerAddToCart={handlerAddToCart}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;