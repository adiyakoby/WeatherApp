import React from "react";
import "./style/InputBox.css"



const InputBox = () => {
    return (
        <div className='input-component'>
            <label >city name</label><br/>
            <input required type="text" name='location' placeholder="Enter a city name"></input>
            <button> Check</button>
        </div> 
    );
};


export default InputBox;