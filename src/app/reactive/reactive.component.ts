import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    name = new FormControl('');
    Registerform = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    contact : new FormControl(''),
    Password : new FormControl(''),
    confirm: new FormControl(''),
    Gender : new FormControl(''),
    Location : new FormControl(''),
    terms : new FormControl('')
  });

  getdetais()
  {
    console.log(this.Registerform.value);
  }

}
