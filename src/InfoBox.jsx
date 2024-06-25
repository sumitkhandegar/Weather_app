import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import HOT_URL from './assets/hot.jpg';
import COLD_URL from './assets/cold.jpg';
import RAINY_URL from './assets/rain.jpg';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={
                            info.humidity > 70 ? RAINY_URL
                            : (info.temp > 15) ? HOT_URL
                            : COLD_URL
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} 
                            {info.humidity > 70 ? <ThunderstormIcon className="weatherIcon" /> 
                            : (info.temp > 15) ? <WbSunnyIcon className="weatherIcon" /> 
                            : <AcUnitIcon className="weatherIcon" />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div className="temperature">Temperature: {info.temp}&deg;C</div>
                            <div className="humidity">Humidity: {info.humidity}%</div>
                            <div className="minTemp">Min Temperature: {info.tempMin}&deg;C</div>
                            <div className="maxTemp">Max Temperature: {info.tempMax}&deg;C</div>
                            <div className="description">The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
