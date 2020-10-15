const newMainWeatherObject = (temp, city, datetime, icon, main) => {
  return {
    temp,
    city,
    datetime,
    icon,
    main
  }
}

const newWeatherDetailsObject = (feelsLike, cloudCover, humidity, windSpeed) => {
  return {
    feelsLike,
    cloudCover,
    humidity,
    windSpeed
  }
}

export { newMainWeatherObject, newWeatherDetailsObject }