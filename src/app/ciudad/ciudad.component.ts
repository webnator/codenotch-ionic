import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss'],
})
export class CiudadComponent implements OnInit {
  @Input() ciudad: Ciudad;
  constructor() { }

  ngOnInit() {}

}
