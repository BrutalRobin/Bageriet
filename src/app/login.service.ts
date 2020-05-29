import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user_id: any;
  usertoken: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  assignName (commonName) {
      console.log("value received: " + commonName);
  }

  loginUser(){
  let formdata = {
  }
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OTk5YzI5LTAwMTMtNGRmNC05NWI2LWJlNDBiMDczZmZmZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiIzNTk5OWMyOS0wMDEzLTRkZjQtOTViNi1iZTQwYjA3M2ZmZmYiLCJpYXQiOjE1OTA0MDEzNDgsIm5iZiI6MTU5MDQwMTM0OCwiZXhwIjoxNTkxMDA2MTQ4LCJ1aWQiOiJSb2JpbkplbnNlbiJ9.rBxfdjkQzgXCxcemNROCrlzYPaGF7ooWq-BitxpPiNp-B8hkJarOiO7wm7BUI8cR9yVBoJgCTnVFUs3tA4_jZg'
 });
  this.http
  .get(`https://api.mediehuset.net/bakeonline/token`, formdata)
  .subscribe(data => {
    this.usertoken = data;
    console.log(this.usertoken)
  });}
}
