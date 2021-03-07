import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from 'src/app/helper/helper.validator'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  Registerform!: FormGroup;

  constructor( private formbuilder:FormBuilder) { }

  submitted = false

  ngOnInit(): void {


    this.Registerform = this.formbuilder.group({
    name : ['',[Validators.required , Validators.minLength(5)]],
    email : ['',[Validators.required,Validators.email]],
    contact : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    Password : ['',Validators.required],
    confirm: ['',Validators.required],
    Gender : ['',Validators.required],
    Location : ['',Validators.required],
    terms : [false,Validators.requiredTrue],
  },
  {
    validators : MustMatch('Password','confirm')
  });

  }

  getdetais()
  {
    console.log(this.Registerform.value);
  }

  get f(){
    return this.Registerform.controls;
  }

  onsubmit(){
    this.submitted=true;
    if(this.Registerform.invalid)
    {
      return
    }
  }

}
