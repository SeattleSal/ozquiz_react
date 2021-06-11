import React, { useEffect, useState } from 'react'

// countdown timer for 60 seconds
function Clock() {

    const [ seconds, setSeconds ] = useState(60);
    const [ timeUp, setTimeUp ] = useState(false);

    function updateTime() {
        if (seconds === 0) {
            // setSeconds(60);
            setTimeUp(true);
        } else {
            setSeconds( seconds => seconds - 1);
        }
    }

    useEffect(() => {
        const token = setTimeout(updateTime, 1000)
        return function cleanup() {
            clearTimeout(token);
        }
    })

    return (
        <div>
            <h1>CLOCK</h1>
            <div class='circle'>
                <p class='m-auto'>{!timeUp ? `Time Left: ${seconds}` : 'Time up!'}</p>
            </div>
        </div>
    )
}

export default Clock
