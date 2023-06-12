import Form  from "./components/Form";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import Card from "./components/Card";
import Credits from "./components/Credits";
const API_WEATHER =  `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=es&q=`;

export default function App() {

  const [city,setCity] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState({
    error: false,
    message: '',
  });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: "",
    condition: "",
    conditionText: "",
    icon: "",
  });


  const onSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error:false,
      message:'',
    })
    try{
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();

      if (data.error) {throw { message: data.error.message };}

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });


    }catch(error){
      setError({
        error: true,
        message: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  return(
    <>
    <Container
    maxWidth="xs"
    sx={{mt:2}}>
      <Typography 
      variant="h3"
      component="h1"
      align="center"
      gutterBottom
      >
        Weather APP
      </Typography>

      <Form 
      onSubmit={onSubmit} 
      city={city} 
      setCity={setCity} 
      error={error.error} 
      errorMessage={error.message} 
      loading={loading}>

      </Form>
      
      {weather.city && (
        <Card weather={weather}></Card>
      )}
    <Container sx={{display: "flex", gap: 1, justifyContent: "center"}}>
    <Credits title="WeatherAPI.com" url="https://www.weatherapi.com/" />
    <Credits title="Facundo Esquivel" url="https://facundoesquivel.netlify.app/" />
    </Container>
    </Container>
    </>
  )
}