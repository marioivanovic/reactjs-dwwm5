import React, { useState } from 'react'

function Compteur() {
    const [compteur, setCompteur] = useState(0)

    const handleClick = () => {
        setCompteur(compteur + 1)
    };



    return (
        <>
            <h2>Value : {compteur}</h2>
            <button onClick={handleClick}>Fais monter le compteur</button>

        </>
    )
}

export default Compteur
