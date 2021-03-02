import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput!:string;
  text!:string;


  enteredContent = 'Some content';


  getValue(msg:HTMLInputElement)
  {
    console.log(msg.value);
    this.userInput = msg.value;
  }

  getmsg()
  {
    this.text = this.enteredContent;
  }

}
