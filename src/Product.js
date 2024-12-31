import React from "react";

const Product = ({ name, price, stock }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>Price : {price}</p>
            <p>Status: {stock ? 'in stock' : 'out of stock'}</p>
        </>
    );
};

export default Product