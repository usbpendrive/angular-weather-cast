import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'
import { Observable, of } from 'rxjs'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bogor',
    country: 'ID',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'rain',
  }

  public getCurrentWeather(city: string, country: string):
    Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
