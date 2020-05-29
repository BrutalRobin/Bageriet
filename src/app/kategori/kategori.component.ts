import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  kategorier: object[];
  produkter: any;
  term: string = '';

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/bakeonline/categories`)
    .subscribe(data => {
      this.kategorier = [data["categories"]];
      console.log(this.kategorier)
      this.http
      .get(`https://api.mediehuset.net/bakeonline/categories/1`)
      .subscribe(data => {
        this.produkter = data;
        console.log(this.produkter)
      });
    });
  }
  myfetch(kategoriid){
    this.http
    .get(`https://api.mediehuset.net/bakeonline/categories/${kategoriid}`)
    .subscribe(data => {
      this.produkter = data;
      console.log(this.produkter)
    });
  }
  dropDown(){
    const element = document.getElementById('result')
    element.style.display = 'block'
  }

  goToProduktPage(produktId){
    this.router.navigate(['/produkt', produktId]);
  }

}
