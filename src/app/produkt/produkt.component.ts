import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss']
})
export class ProduktComponent implements OnInit {
  comments: any;
  produkt: any;
  users: any;
  produkt_id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const produktId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/bakeonline/products/${produktId}`)
    .subscribe(data => {
      this.produkt = data;
      console.log(this.produkt)
    });
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OTk5YzI5LTAwMTMtNGRmNC05NWI2LWJlNDBiMDczZmZmZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiIzNTk5OWMyOS0wMDEzLTRkZjQtOTViNi1iZTQwYjA3M2ZmZmYiLCJpYXQiOjE1OTA0MDEzNDgsIm5iZiI6MTU5MDQwMTM0OCwiZXhwIjoxNTkxMDA2MTQ4LCJ1aWQiOiJSb2JpbkplbnNlbiJ9.rBxfdjkQzgXCxcemNROCrlzYPaGF7ooWq-BitxpPiNp-B8hkJarOiO7wm7BUI8cR9yVBoJgCTnVFUs3tA4_jZg'
   });
    this.http
    .get(`https://api.mediehuset.net/bakeonline/comments/${produktId}`,{ headers: reqHeader })
    .subscribe(data => {
      this.comments = data;
      console.log(this.comments)
    });
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OTk5YzI5LTAwMTMtNGRmNC05NWI2LWJlNDBiMDczZmZmZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiIzNTk5OWMyOS0wMDEzLTRkZjQtOTViNi1iZTQwYjA3M2ZmZmYiLCJpYXQiOjE1OTA0MDEzNDgsIm5iZiI6MTU5MDQwMTM0OCwiZXhwIjoxNTkxMDA2MTQ4LCJ1aWQiOiJSb2JpbkplbnNlbiJ9.rBxfdjkQzgXCxcemNROCrlzYPaGF7ooWq-BitxpPiNp-B8hkJarOiO7wm7BUI8cR9yVBoJgCTnVFUs3tA4_jZg'
   });
    this.http
    .get(`https://api.mediehuset.net/bakeonline/users`,{ headers: reqHeader })
    .subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }
  sendcomment(titel, comment){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/form-data',
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OTk5YzI5LTAwMTMtNGRmNC05NWI2LWJlNDBiMDczZmZmZiJ9.eyJpc3MiOiJhcGkubWVkaWVodXNldC5uZXQiLCJqdGkiOiIzNTk5OWMyOS0wMDEzLTRkZjQtOTViNi1iZTQwYjA3M2ZmZmYiLCJpYXQiOjE1OTA0MDEzNDgsIm5iZiI6MTU5MDQwMTM0OCwiZXhwIjoxNTkxMDA2MTQ4LCJ1aWQiOiJSb2JpbkplbnNlbiJ9.rBxfdjkQzgXCxcemNROCrlzYPaGF7ooWq-BitxpPiNp-B8hkJarOiO7wm7BUI8cR9yVBoJgCTnVFUs3tA4_jZg'
   });
   const produktId = this.route.snapshot.paramMap.get('id')
   let formdata = {
    title: titel,
    comment: comment,
    user_id: 10,
    product_id: produktId,
    active: true
  };
    this.http
    .post('https://api.mediehuset.net/bakeonline/comments', formdata, { headers: reqHeader })
    .subscribe(data => {
      this.users = data;
      console.log(this.users)
    });

  }
}
