import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styleUrls: ['./pipes-angular.component.css']
})
export class PipesAngularComponent implements OnInit {

  texto:string = 'ciudad de Madrid'
  id:any = 1;
  ahora: any = new Date();
  importe:number = 1876.656565

  constructor() { }

  ngOnInit(): void {
    this.id = '000' + this.id
  }


}
