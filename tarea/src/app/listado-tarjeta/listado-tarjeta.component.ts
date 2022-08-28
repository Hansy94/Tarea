import { Component, OnInit } from '@angular/core';
import { Itarjeta } from '../tarjeta/Itarjeta';

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css']
})
export class ListadoTarjetaComponent implements OnInit {
  tarjetacv:Itarjeta[]=[
    {
      titulo:'Hansy Matamoros',
      descripcion: 'Estudiante Desarrollo web'
    },
    {
      titulo:'Andrea Zelaya',
      descripcion: ' Licenciada Periodismo'
    },
    {
      titulo:'Francisco Reyes ',
      descripcion: 'Ingeniero en sistemas '
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
