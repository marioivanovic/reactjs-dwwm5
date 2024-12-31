import React from 'react'

function Card({ user }) {
    return (
        <>
            <img src={user.avatar} alt={user.name} />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </>

    )
}

export default Card


