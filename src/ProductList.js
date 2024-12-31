import React from 'react'
import Product from './Product'
function ProductList({ products }) {

    return (
        <>
            {products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                />
            ))}

        </>
    )
}

export default ProductList
