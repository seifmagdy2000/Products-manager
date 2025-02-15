import React from 'react'
import Product from '../components/Product/Product.jsx'
const HomePage = (props) => {
    return(
    <div className="homePage">
        <div className="product-list">
            <Product isDark={props.isDark}/>


        </div>
        
    </div>

)
}

export default HomePage