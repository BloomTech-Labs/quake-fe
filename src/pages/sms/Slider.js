import React from 'react';

const Slider = props => {

    return (
        <div className='slide-container'>
            <input className='slider' type="range" min={props.min} max={props.max} value={props.value} />
        </div>
    );
};


export default Slider;