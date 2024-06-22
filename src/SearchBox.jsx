import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "157507500d66b254cda8e6506f059d5b";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let res = await response.json();
            let result = {
                city: city,
                temp: res.main.temp,
                tempMin: res.main.temp_min,
                tempMax: res.main.temp_max,
                humidity: res.main.humidity,
                feelsLike: res.main.feels_like,
                weather: res.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    color="secondary"
                    required 
                    value={city}
                    onChange={handleChange}
                    className="custom-textfield"
                />

                <br /><br />

                <Button 
                    variant="contained" 
                    type="submit"
                    color="secondary"
                    size="medium"
                >
                    Search
                </Button>
            </form>
            {error && <p style={{ color: "red" }}>No such place exist!</p>}
        </div>
    );
}
