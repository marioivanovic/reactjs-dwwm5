import React from 'react'

function Tv({ channel, volume, isOn }) {
    return (
        <div>
            {
                isOn ? (
                    <>
                        <p> Channel : {channel}</p>
                        <p>Volume : {volume}</p>
                    </>
                )
                    : (
                        <p>TV OFF !!!! </p>
                    )}
        </div>
    )
}

export default Tv
