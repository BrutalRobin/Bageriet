import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginfulService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {}

  token: any;
  clickCounter: number = 0;
  name: string = '';

  login(titel, comment){
   let formdata = {
    username: titel,
    password: comment,
  };
    this.http
    .post('https://api.mediehuset.net/token', formdata)
    .subscribe(data => {
      this.token = data;
      console.log(this.token)
      this.clickCounter +=1;
      console.log(this.clickCounter)
    });

}
}
