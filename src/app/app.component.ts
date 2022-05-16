import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tarea01';
  value = 'Bryan';
  edad = 30;
  


  constructor() {

  }

  ngOnInit(): void {

  }

}


