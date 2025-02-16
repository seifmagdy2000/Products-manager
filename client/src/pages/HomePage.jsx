import React, { useEffect } from 'react'
import Product from '../components/Product/Product.jsx'
import { useProductStore } from '../store/product.js'
import './HomePage.css'
const HomePage = (props) => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        const fetchData = async () => {
            await fetchProducts();
        };
        fetchData();
    }, []);

    console.log(products);

    return (
        <div className="homePage">
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} isDark={props.isDark} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
