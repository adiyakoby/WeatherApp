import { useState } from "react";
import "./style/InputBox.css"

type InputBoxProps = {
    fetchData: (search: string) => void;
    error: string | null ;
};


/**
 * The InputBox component allows the user to input a city name and trigger a fetch operation.
 * It takes a function to fetch data and an optional error message as props.
 * 
 * @param fetchData - Function to fetch weather data based on the provided city name.
 * @param error - Error message to display if any issues arise during data fetching.
 * @returns The rendered InputBox component.
 */
const InputBox = ({fetchData, error}: InputBoxProps) => {
    const [input, setinput] = useState('')

    /**
     * Trigger function to fetch weather data when input is valid (length > 1).
     */
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