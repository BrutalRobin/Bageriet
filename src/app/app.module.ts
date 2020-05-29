import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { ProduktComponent } from './produkt/produkt.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'forside', component: ForsideComponent },
  { path: '', redirectTo: '/forside', pathMatch: 'full' },
  { path: 'produkt/:id', component: ProduktComponent },
  { path: 'kategori', component: KategoriComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    ProduktComponent,
    KategoriComponent,
    KontaktComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
