const newMainWeatherObject = (temp, city, datetime, icon, main) => {
  return {
    temp,
    city,
    datetime,
    icon,
    main
  }
}

const newWeatherDetailsObject = () => {
  return {
    feelsLike,
    cloudCover,
    humidity,
    windSpeed,
    uvIndex
  }
}

export { newMainWeatherObject, newWeatherDetailsObject }