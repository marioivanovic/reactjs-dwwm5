import React, { useState } from 'react'

function Form() {
    const [valueInput, setValueInput] = useState('');
    const [isInactive, setIsInactive] = useState(false);

    return (
        <>
            <h1>Mon premier Formulaire</h1>

            <input type="text" name="" value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                disabled={isInactive}
            />
            <button onClick={() => setIsInactive(!isInactive)}>
                {isInactive ? 'Active' : 'Inactive'}

            </button>

            <p>Valeur de l'input : {valueInput}</p>
        </>
    )
}

export default Form
