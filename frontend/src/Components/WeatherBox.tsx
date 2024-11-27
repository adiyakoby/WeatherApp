import React from "react";
import "./style/WeatherBox.css"


const WeatherBox = () => {

    return(
        <div className='weather-component'>
            <div className="outer-box">
                <div className="inner-box">
                    <section>
                        Tel Aviv<br/>
                        israel
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