import { Component } from '@angular/core';
import { Ciudad, Temperatura } from '../ciudad';
import { CiudadesService } from '../ciudades.service';
import { TemperaturaService } from '../temperatura.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ciudades: Array<Ciudad>

  constructor(
    private ciudadesService: CiudadesService,
    private temperaturaService: TemperaturaService
  ) {
    this.ciudades = this.ciudadesService.obtenerCiudades();
    for (const ciudad of this.ciudades) {
      this.temperaturaService.obtenerTemperaturaCiudad(ciudad.nombre)
        .subscribe((temp: Temperatura) => {
          ciudad.temperatura = temp;
        });
    }
  }
}
