import React, { useState, useEffect } from 'react'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            console.log(data)
        }
        fetchData();
    }, []);

    return (
        <div className='home'>
            <h2 className='heading'>Welcome to Redux Store</h2>
            <div className='products'>
                {products.map(product => (
                    <div key={products.id} className="product">
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}$</h5>
                        <button className='addBtn'>Add to cart</button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Home
