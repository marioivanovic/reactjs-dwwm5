import React from "react";
function Données({ name, age, city }) {
    return (
        <div >
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default Données