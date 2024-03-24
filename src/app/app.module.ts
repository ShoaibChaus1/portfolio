import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContacComponent } from './contac/contac.component';
import { WorksComponent } from './works/works.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TextDirective } from './text.directive';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ContacComponent,
    WorksComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    NotfoundComponent,
    TextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
