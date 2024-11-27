import { useState } from "react";
import "./style/InputBox.css"

type InputBoxProps = {
    fetchData: (search: string) => void;
};

const InputBox = ({fetchData}: InputBoxProps) => {
    const [input, setinput] = useState('')

    const getLocationData = () => {
        if (input.length > 2) {
            fetchData(input)
        }

    };


    return (
        <div className='input-component'>
            <label>city name</label><br/>
            <input 
                required 
                type="text" 
                name='location' 
                placeholder="Enter a city name"
                value={input}
                onChange={(e)=>{setinput(e.target.value)}}
            />
             
            <button onClick={getLocationData}>
                Check
            </button>
        </div> 
    );
};


export default InputBox;