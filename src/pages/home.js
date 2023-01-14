import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';

const Home = () => {
    // const [products, setProducts] = useState([]);
    const { data: products, status } = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchData = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     setProducts(data);
        //     console.log(data)
        // }
        // fetchData();
    }, [dispatch]);
    const handleAdd = (product) => {
        dispatch(add(product));
    }

    return (
        <div className='home'>
            <h2 className='heading'>Welcome to Redux Store</h2>
            <div className='products'>
                {products.length > 0 ? products[0].map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}$</h5>
                        <button className='addBtn' onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                )) : <h2>Loading ...</h2>}

            </div>

        </div>
    )
}

export default Home
