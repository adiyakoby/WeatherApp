import React from "react";




const InputBox = () => {
    return (
        <div className='input-comp'>
            <label >city name</label><br/>
            <input required type="text" name='location'></input>
        </div> 
    );
};


export default InputBox;