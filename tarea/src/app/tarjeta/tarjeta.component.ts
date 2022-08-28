import { Component, Input, OnInit } from '@angular/core';
import { Itarjeta } from './Itarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() tarjeta?: Itarjeta ={
    titulo:"",
    descripcion:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
