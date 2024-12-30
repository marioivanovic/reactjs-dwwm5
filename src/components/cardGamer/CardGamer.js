import React from 'react'

import './cardGamer.css'

function CardGamer({ nom, points, isOnline }) {
    return (
        <div className="card">

            <h1>{nom}</h1>
            <p>Points: {points}</p>
            {isOnline ? "🟢 En ligne" : "🔴 Hors Ligne"}
        </div>
    )
}

export default CardGamer
