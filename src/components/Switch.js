import React from 'react';
import './scss/switch/switch.scss';
const Switch = ({rounded = false}) => {
    return(
    <div className="switch2">
    <label className="switch">
    <input type="checkbox"/>
    <span className="slider rounded"/>
    </label>
    </div>
    
    );
};

export default Switch;