import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {


  actor: any = {
    nombre: 'Robert',
    apellido: 'De Niro',
  }




  constructor() { }

  ngOnInit(): void {
  }

}
