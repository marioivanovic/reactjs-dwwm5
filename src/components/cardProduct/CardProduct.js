import React from 'react'

function CardProduct({ product }) {
    return (
        <>

            <h1>{product.title}</h1>
            {product.images.map((image, index) => (
                <img key={index} src={image} />
            ))}

            <p>{product.description}</p>
            <p>{product.price}</p>
        </>

    )
}

export default CardProduct