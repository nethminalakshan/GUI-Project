import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ id, timeInSeconds }) => {
    const [time, setTime] = useState(timeInSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <p id={id}>
            {time > 0 ? `Closes in ${hours}:${minutes}:${seconds}` : 'Booking closed'}
        </p>
    );
};

export default CountdownTimer;