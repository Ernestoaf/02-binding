import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directva-ngclass',
  templateUrl: './directva-ngclass.component.html',
  styleUrls: ['./directva-ngclass.component.css']
})
export class DirectvaNgclassComponent implements OnInit {

  puntuacion:number;

  constructor() { 
    
  }

  ngOnInit() {

  }

  ngDoCheck(){
    console.log(this.puntuacion);
  }

}
