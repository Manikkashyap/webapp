import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  details: any;

  constructor() { }

  ngOnInit(): void {
  }

  model:any=[];

  getValues(f:NgForm)
  {
    console.log(f.value);

    this.details=f.value;
  }


}
