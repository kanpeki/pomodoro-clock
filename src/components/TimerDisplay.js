import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons';
import '../styles/TimerDisplay.scss';

const TimerDisplay = (props) => {
    const { reset, isPaused, toggleIsPaused: toggle } = props;
    var faIcon = isPaused ? faPlay : faPause;
    return (
        <div>
            <p>Timer</p>
            <div class="timer-controls">
                <button id="start_stop" onClick={() => toggle()}>
                    <FontAwesomeIcon icon={faIcon} />
                </button>
                <button id="reset" onClick={() => reset()}>
                    <FontAwesomeIcon icon={faSync} />
                </button>
            </div>
        </div>
    );
};

export default TimerDisplay;