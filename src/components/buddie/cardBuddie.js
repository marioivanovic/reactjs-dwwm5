import React from 'react'

function CardBuddie({ buddie }) {
    console.log("buddie", buddie)
    return (
        <>
            <h1>Buddie : </h1>

            <h1>{buddie.displayName}</h1>

            <img src={buddie.displayIcon} alt="" />

        </>

    )
}

export default CardBuddie