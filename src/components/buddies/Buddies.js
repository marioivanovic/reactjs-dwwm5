import React from 'react'
import CardBuddie from '../buddie/cardBuddie'
import { useFetchBuddies } from './../../hooks/getAllBuddies'

function CardsBuddies() {
    const { buddies, error } = useFetchBuddies();

    if (error) return <div>{error}</div>
    return (
        <>
            {buddies.map(buddie => (
                <CardBuddie key={buddie.uuid} buddie={buddie} />
            ))}
        </>


    )
}

export default CardsBuddies