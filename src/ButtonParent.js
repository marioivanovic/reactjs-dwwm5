import React from "react";
import Button from './Button';


const ButtonParent = () => {
    const click = () => {
        alert('Cliquez !');
    };
    return (
        <div>
            <h2>Exercice 2</h2>
            <Button text="Cliquez sur moi !" color="black" onClick={click} />
            <Button text="Supprimer !" color="red" onClick={() => alert('Supprimer action')} />
            <Button text="Suivez moi !" color="gray" onClick={() => console.log('Suivre')} />
        </div>
    );
};

export default ButtonParent;