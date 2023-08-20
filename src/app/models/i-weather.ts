interface ICoord {
  lon: number | null;
  lat: number | null;
}

interface IWeaTher {
  id: number | null;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number | null;
  feels_like: number | null;
  temp_min: number | null;
  temp_max: number | null;
  pressure: number | null;
  humidity: number | null;
}

interface IWind {
  speed: number | null;
  deg: number | null;
}

interface ICloud {
  all: number | null;
}

interface ISys {
  type: number | null;
  id: number | null;
  country: string;
  sunrise: number | null;
  sunset: number | null;
}

export interface IWeather {
  status: string;
  coord: ICoord;
  weather: IWeaTher;
  base: string;
  main: IMain;
  visibility: number | null;
  wind: IWind;
  clouds: ICloud;
  dt: number | null;
  sys: ISys;
  timezone: number | null;
  id: number | null;
  name: string;
  cod: number | null;
}
