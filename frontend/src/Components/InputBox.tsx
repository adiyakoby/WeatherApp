import React from "react";
import "./style/InputBox.css"

type InputBoxProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    fetchData: () => void;
};

const InputBox = ({search, setsearch, fetchData}) => {
    return (
        <div className='input-component'>
            <label>city name</label><br/>
            <input 
                required 
                type="text" 
                name='location' 
                placeholder="Enter a city name"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />
             
            <button onClick={fetchData}>
                Check
            </button>
        </div> 
    );
};


export default InputBox;