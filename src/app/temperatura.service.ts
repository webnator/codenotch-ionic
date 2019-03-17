import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { Temperatura } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  private url: string = 'http://api.openweathermap.org/data/2.5/weather?APPID=0971b1971fcdf8441d98245f918bbad1&units=metric&lang=es';
  
  constructor(private http: HttpClient) { }

  public obtenerTemperaturaCiudad(nombreCiudad: string): Observable<Temperatura> {
    return this.http.get(`${this.url}&q=${nombreCiudad}`)
      .pipe(
        map(this.extractData)
      );
  }

  private extractData(apiResult: any): Temperatura {
    return {
      valor: apiResult.main.temp,
      tipo: 'ºC'
    };
  }
}
