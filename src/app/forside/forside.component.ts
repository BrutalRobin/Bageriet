import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

declare const showSlides: any;
declare const currentSlide: any;
declare const plusSlides: any;

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {


  constructor(private router: Router, private http: HttpClient) {}

  produkter: object[];
  ngOnInit(): void {

    this.http
    .get(`https://api.mediehuset.net/bakeonline/products`)
    .subscribe(data => {
      this.produkter = [data["products"]];
      console.log(this.produkter)
    });

  }
  ngAfterViewInit(): void {
    showSlides();

  }
  goToProduktPage(produktId){
    this.router.navigate(['/produkt', produktId]);
  }

}
