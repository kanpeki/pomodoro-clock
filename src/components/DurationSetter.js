import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/DurationSetter.scss';

const getLabel = (type) => type.charAt(0).toUpperCase() + type.slice(1) + " Length";

const DurationSetter = (props) => {
    const {type, down, up, duration} = props;
    var label = getLabel(type);
    return (
        <div>
            <p id={`${type}-label`}>{label}</p>
            <div class="setter-controls">
                <button id={`${type}-decrement`} onClick={() => down(type)}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <p id={`${type}-length`}>{duration}</p>
                <button id={`${type}-increment`} onClick={() => up(type)}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
    );
};

export default DurationSetter;