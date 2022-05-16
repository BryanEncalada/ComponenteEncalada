import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.compenenet.html',
  styleUrls: ['./content.compenenet.scss']
})
export class Appcontent implements OnInit {
  title = 'Tarea01';
  nota = 10;
  estudiantes = [
    {
      nombre: "Ricardo",
      curso: "Angular",
      nota: 7,
      fechaIngreso:'16/05/2020'
    },
    {
      nombre: "Jose",
      curso: "Angular",
      nota: 10,
      fechaIngreso:'16/05/2020'
    },
    {
      nombre: "Carlos",
      curso: "Angular",
      nota: 3,
      fechaIngreso:'16/05/2020'
    },
    {
      nombre: "Andrea",
      curso: "Angular",
      nota: 10,
      fechaIngreso:'16/05/2020'
    }

  ];


constructor(){
  
}

ngOnInit(): void {
  
}

}