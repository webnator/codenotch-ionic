import { Component } from '@angular/core';
import { Ciudad } from '../ciudad';
import { CiudadesService } from '../ciudades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ciudades: Array<Ciudad>

  constructor(private ciudadesService: CiudadesService) {
    this.ciudades = this.ciudadesService.obtenerCiudades();
  }
}
