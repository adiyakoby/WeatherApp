import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {FetchData, extractHours} from './utils';
import cors from 'cors';
import e from 'express';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
}));

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY || undefined;
const WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json'


app.post('/api', async (req: Request, res: Response): Promise<any> => {
    try {
        const {location, days} = req?.body;
        const url: string = `${WEATHER_URL}?key=${API_KEY}&q=${location}&days=${days || 1}}`;
        const data = await FetchData(url);

        if (data) {
            const {name, country, lat, lon, localtime} = data.location;
            const {temp_c, condition, precip_mm, humidity, wind_kph} = data.current;
            const hours = extractHours(data.forecast.forecastday[0].hour, localtime)

            const WeatherData = { 
                name, country, lat, lon, localtime, temp_c, 
                condition, humidity, wind_kph, precip_mm,
                hours,
            };
            
            return res.json(WeatherData);
        } else {
            return res.status(400).json({error: 'Error: couldnt fetch data.'})
        }
        
    } catch (error) {
        return res.status(400).json(error)
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
