import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngfor',
  templateUrl: './directiva-ngfor.component.html',
  styleUrls: ['./directiva-ngfor.component.css']
})

export class DirectivaNgforComponent implements OnInit {

  equipos:string[];
  jugadores:object[];

  constructor() { }

  ngOnInit() {
    this.equipos = ["Real Madrid", "FC Barcelona", "Valencia"];
    this.jugadores=[
      {nombre:"Ernesto", apellidos:"Alonso"},
      {nombre:"Roberto", apellidos:"Garcia"},
      {nombre:"Javier", apellidos:"Hernández"},
      {nombre:"Alejandro", apellidos:"Moreno"},
    ]
  }

}
