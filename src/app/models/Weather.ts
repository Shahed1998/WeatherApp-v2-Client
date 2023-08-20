import { IWeather } from './i-weather';

export class Weather implements IWeather {
  status = '';
  coord = {
    lat: null,
    lon: null,
  };
  weather = {
    id: null,
    main: '',
    description: '',
    icon: '',
  };
  base = '';
  main = {
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
    pressure: null,
    humidity: null,
  };
  visibility = null;
  wind = {
    speed: null,
    deg: null,
  };
  clouds = {
    all: null,
  };
  dt = null;
  sys = {
    type: null,
    id: null,
    country: '',
    sunrise: null,
    sunset: null,
  };
  timezone = null;
  id = null;
  name = '';
  cod = null;
}
