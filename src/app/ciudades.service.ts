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
      marea: 2
    },{
      codigo: 'SOM',
      nombre: 'Somo',
      pais: 'España',
      periodo: 8,
      marea: 5
    }];
  }

  public obtenerCiudades(): Array<Ciudad> {
    return this.ciudades;
  }
}
