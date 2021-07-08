import React, { useEffect, useState } from 'react';
import './Timer.css';

// Timer for loading new data
const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                setTimer(60);
            }
        }, 1000);
    }, [timer]);


    return (
        <div className="timer">
            <h5>{timer}</h5>
        </div>

    );
};

export default Timer;