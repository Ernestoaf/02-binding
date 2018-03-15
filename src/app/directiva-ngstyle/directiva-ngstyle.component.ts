import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngstyle',
  templateUrl: './directiva-ngstyle.component.html',
  styleUrls: ['./directiva-ngstyle.component.css']
})
export class DirectivaNgstyleComponent implements OnInit {

  puntuacion:number;

  constructor() { }

  ngOnInit() {
  }

  setColor(){
    return this.puntuacion>=5 ? 'green' : 'red';
    // if(this.puntuacion >=5){
    //   return 'green';
    // }else{
    //   'red';
    // }
  }
}
