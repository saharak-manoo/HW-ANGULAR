import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

enableProdMode();

const appRoutes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
