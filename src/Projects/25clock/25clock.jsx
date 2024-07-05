import React, { useState, useRef, useEffect } from 'react';
import './25clock.css';

function Clock() {
    const [breakLength, setBreakLength] = useState(300000);
    const [sessionLength, setSessionLength] = useState(1500000);
    const [whichClockIsRunning, setWhichClockIsRunning] = useState("Session");
    const [clockStatus, setClockStatus] = useState(false);
    const [timer, setTimer] = useState(1500000);
    //start the clock
    useEffect(() => {
        let interval;
        if (clockStatus == true) {
            interval = setInterval(() => {
                setTimer(prevTime => {
                    if ((prevTime - 1000) == 0) {
                        audio('play')
                    }
                    if ((prevTime - 1000) < 0) {
                        audio('stop');
                        timerReachedZero();
                    }
                    return prevTime - 1000;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [clockStatus]);

    //change Timer Tiime
    useEffect(() => {
        setTimer(whichClockIsRunning === "Session" ? sessionLength : breakLength);
    }, [sessionLength, breakLength]);


    // useEffect(() => {
    //     let interval;

    //     if (clockStatus) {
    //         console.log(`1`);
    //         interval = setInterval(() => {
    //             setTimer(prevTime => {
    //                 if (prevTime <= 1000) {
    //                     clearInterval(interval);
    //                     prevTime-1000
    //                     timerIsZero();
    //                     return 0;
    //                 }
    //                 return prevTime - 1000;
    //             });
    //         }, 1000);
    //     } else {
    //         console.log(`2`);
    //         // Set timer when clock is not running
    //         setTimer(whichClockIsRunning === "Session" ? sessionLength : breakLength);
    //     }

    // Reset timer when session length changes and clock is not running
    // if (!clockStatus && whichClockIsRunning === "Session") {
    //     console.log(`3`);
    //     setTimer(sessionLength);
    // }

    //     return () => clearInterval(interval);
    // }, [clockStatus, whichClockIsRunning, sessionLength, breakLength]);
    // function timerIsZero() {
    //     setWhichClockIsRunning(prev => prev === "Session" ? "Break" : "Session");
    //     setTimer(prev => whichClockIsRunning === "Session" ? breakLength : sessionLength);
    // }
    function timerReachedZero() {
        setWhichClockIsRunning(prev => prev == 'Session' ? 'Break' : 'Session');
        setTimer(whichClockIsRunning == 'Session' ? breakLength : sessionLength);
        debuger(`TimerIsZero`, 's');
    }

    function audio(whatToDo) {
        const audio = document.getElementById('beep');
        switch (whatToDo) {
            case 'play':
                audio.play();
                break;
            case 'stop':
                audio.pause();
                audio.currentTime = 0;
                break;
            default: console.log(`
                wrong argument passed in audio function`);
        }
    }

    function format(milliseconds, t) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        if (t == 'M') return minutes;
        else if (t == 'S') return formattedSeconds;
        else return `${formattedMinutes}:${formattedSeconds}`;}

    function increment(length) {
        debuger(`increase`, length);
        length == "session" ?
            [setSessionLength(prev => (prev + 60000) > (60 * 60000) ? (60 * 60000) : prev + 60000)] :
            [setBreakLength(prev => (prev + 60000) > (60 * 60000) ? (60 * 60000) : prev + 60000)];}

    function decrease(length) {
        debuger(`decrease`, length);
        length == "session" ?
            [setSessionLength(prev => (prev - 60000) < 1 ? 60000 : prev - 60000)] :
            [setBreakLength(prev => (prev - 60000) < 1 ? 60000 : prev - 60000)];}

    function reset() {
        debuger('reset');
        setBreakLength(300000);
        setSessionLength(1500000);
        setWhichClockIsRunning("Session");
        setClockStatus(false);
        setTimer(1500000);
        audio('stop');
    }

    function startPause() {
        debuger(`startPause`);
        setClockStatus(prev => !prev);}

    function debuger(clicked, s = '') {
        s == 's' ?
            console.log(`
                ------------------
                | ${clicked} |
                ------------------`) :
            console.log(`
            ${clicked}${s}`);}

    return (
        <div id="Clock">
            <div id='break'>
                <div id="break-label">Break-Length</div>
                <div id='break-decrement' onClick={() => decrease('break')}>-</div>
                <div id='break-length'>{format(breakLength, 'M')}</div>
                <div id='break-increment' onClick={() => increment('break')}>+</div>
            </div>
            <div id="session">
                <div id="session-label">Session-Length</div>
                <div id="session-decrement" onClick={() => decrease('session')}>-</div>
                <div id="session-length">{format(sessionLength, 'M')}</div>
                <div id="session-increment" onClick={() => increment('session')}>+</div>
            </div>
            <div id="timer">
                <div id="timer-label">{whichClockIsRunning}</div>
                <div id="reset" onClick={() => reset()}>🔁</div>
                <div id="time-left">{format(timer)}</div>
                <div id='start_stop' onClick={() => startPause()}>{clockStatus ? '⏸️' : '▶️'}</div>
            </div>
            <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
        </div>);
}

export default Clock;