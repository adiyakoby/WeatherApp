import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import FetchData from './utils';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY || undefined;
const WEATHER_URL = 'http://api.weatherapi.com/v1/current.json'


app.post('/api', async (req: Request, res: Response): Promise<any> => {
    try {
        const {location} = req?.body;
        const url: string = `${WEATHER_URL}?key=${API_KEY}&q=${location}`;
        const data = await FetchData(url);

        if (data.ok) {
            const {name, country, lat, lon, local_time} = data.location;
            const {temp_c, condition, precip_mm, humidity, wind_kph} = data.current;

            const WeatherData = { 
                name, country, lat, lon, local_time, temp_c, 
                condition, humidity, wind_kph, precip_mm,
            };

            return res.json(WeatherData);
        } else {
            return res.status(400).json({error: 'Error: couldnt fetch data.'})
        }
        
    } catch (error) {
        return res.status(400).json({error: 'Error: couldnt fetch data.'})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
