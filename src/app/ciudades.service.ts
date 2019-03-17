import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  public ciudades: Array<Ciudad>;
  constructor() {
    this.ciudades = [{
      codigo: 'MAL',
      nombre: 'Malaga',
      pais: 'España',
      periodo: 10,
      marea: 2,
      temperatura: {
        valor: 20,
        tipo: 'ºC'
      }
    },{
      codigo: 'SOM',
      nombre: 'Somo',
      pais: 'España',
      periodo: 8,
      marea: 5,
      temperatura: {
        valor: 18,
        tipo: 'ºC'
      }
    }];
  }

  public obtenerCiudades(): Array<Ciudad> {
    return this.ciudades;
  }
}
