import React from 'react'
import CardProduct from '../cardProduct/CardProduct';
import { useFetchFakeBreeds } from './../../hooks/fakeProductsList'

function CardsProducts() {
    const { products, error } = useFetchFakeBreeds();

    if (error) return <div>{error}</div>
    return (
        <>
            {breeds.map(breed => (
                <CardProduct key={breed.id} breed={breed} />
            ))}
        </>


    )
}

export default CardsProducts