import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  msg!:string;
  btn=true;

getmsg(){
  alert('Button is Clicked');
  this.msg='Button is Click';
}

  constructor()

  { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btn=false;

    }, 5000);


}

}
