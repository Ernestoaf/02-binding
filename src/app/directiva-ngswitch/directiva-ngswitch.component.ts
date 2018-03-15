import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngswitch',
  templateUrl: './directiva-ngswitch.component.html',
  styleUrls: ['./directiva-ngswitch.component.css']
})
export class DirectivaNgswitchComponent implements OnInit {

  jugadores:object[]=[
    {nombre:"Lebron", apellidos:"James",equipo:"Cleveland"},
    {nombre:"Pau ", apellidos:"Gasol",equipo:"San Antonio"},
    {nombre:"Jose Manuel ", apellidos:"Calderon",equipo:"Cleveland"},
    {nombre:"Marc ", apellidos:"Gasol",equipo:"Memphis"},
    {nombre:"Ernesto ", apellidos:"Alonso",equipo:"Cleveland"},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
