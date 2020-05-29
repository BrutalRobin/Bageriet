import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  email: string = '';
  besked: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  sendkon(){
       this.clickCounter +=1;
       console.log(this.clickCounter)
     };

 }


