import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(59);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (hour === 0 && minute === 0 && second === 0) {
                alert("Time Finished");
                clearInterval(id); 
            } else {
                if (second > 0) {
                    setSecond(second - 1);
                } else if (minute > 0) {
                    setMinute(minute - 1);
                    setSecond(59);
                } else if (hour > 0) {
                    setHour(hour - 1);
                    setMinute(59);
                    setSecond(59);
                }
            }
        }, 1000);

        return () => clearInterval(id); 
    }, [hour, minute, second]);

    return (
        <div className="timer-container">
            <h2 className="timer-display">
            Time Left: {hour}:{minute}:{second}
            </h2>
        </div>
    );
};

export default Timer;
