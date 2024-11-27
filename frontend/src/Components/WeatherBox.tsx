import React, { useEffect } from "react";
import "./style/WeatherBox.css"

export type WeatherBoxProps = {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
    temp_c: number;
    condition: string[];
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    hours: {hour: number, temp_c: number}[];

}




const WeatherBox = (props : WeatherBoxProps) => {

    // useEffect(()=>{}, [props]);
    return(
        <div className='weather-component'>
            <div className="outer-box">
                <div className="inner-box">
                    <section>
                        {props.name}
                        {props.country}
                    </section>
                    <section>
                        18 temp<br/>
                        sunny
                    </section>
                    <section>

                    </section>
                </div>
            </div>
        </div>
    );
};


export default WeatherBox;