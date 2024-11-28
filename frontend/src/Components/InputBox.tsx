import { useState } from "react";
import "./style/InputBox.css"

type InputBoxProps = {
    fetchData: (search: string) => void;
    error: string | null ;
};



const InputBox = ({fetchData, error}: InputBoxProps) => {
    const [input, setinput] = useState('')

    const getLocationData = () => {
        if (input.length > 1) {
            fetchData(input)
        }
    };

    return (
        <div className='input-component'>
            <label>city name</label><br/>
            <input 
                required 
                minLength={1}
                maxLength={20}
                type="text" 
                name='location' 
                placeholder="Enter a city name"
                value={input}
                onChange={(e)=>{setinput(e.target.value)}}
            />
             
            <button onClick={getLocationData}>
                Check
            </button>
            {error && <p className="error-message">{error}</p>}
        </div> 
    );
};


export default InputBox;