import React from 'react';
import '../styles/DurationSetter.scss';

const getLabel = (type) => type.charAt(0).toUpperCase() + type.slice(1) + " Length";

const DurationSetter = (props) => {
    const {type, down, up, duration} = props;
    var label = getLabel(type);
    return (
        <div>
            <p id={`${type}-label`}>{label}</p>
            <div class="duration-setter">
                <button id={`${type}-decrement`} onClick={() => down(type)}>
                    <i className="fa fa-arrow-down"></i>
                </button>
                <p id={`${type}-length`}>{duration}</p>
                <button id={`${type}-increment`} onClick={() => up(type)}>
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>
    );
};

export default DurationSetter;