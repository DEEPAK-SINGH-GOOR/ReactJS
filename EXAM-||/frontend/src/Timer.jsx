import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [time, setTime] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let id;
        if (flag) {
            id = setInterval(() => {
                if (hour === 0 && minute === 0 && second === 0) {
                    alert("Time Finish");
                    setFlag(false);
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
        }
        return () => clearInterval(id);
    }, [flag, hour, minute, second]);

    const divide = () => {
        let newTime = time / 60;
        setHour(Math.floor(newTime));
        setMinute(time - Math.floor(newTime) * 60 - 1);
        setSecond(59);
        setFlag(true);
    };

    return (
        <div className="timer-container">
            <h1 className="timer-display">
                Set Exam Timer: {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:{second.toString().padStart(2, "0")}
            </h1>

            <input
                type="number"
                placeholder="Enter time in seconds"
                className="timer-input"
                onChange={(e) => setTime(e.target.value || 0)}

            />
            <div>
                <button className="timer-button" onClick={divide} disabled={flag}>
                    Start
                </button>
            </div>
        </div>
    );
};

export default Timer;
