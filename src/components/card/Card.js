import React from 'react'

function Card({ agent }) {
    console.log("AGENTS", agent)
    return (
        <>
            <h1>Agent : </h1>

            <h1>{agent.displayName}</h1>

            <img src={agent.displayIcon} alt="" />

        </>

    )
}

export default Card


