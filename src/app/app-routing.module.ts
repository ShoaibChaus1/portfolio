import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContacComponent } from './contac/contac.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  {path:'skills', component:SkillsComponent},
  {path:'about', component:AboutComponent},
  {path:'work', component:WorksComponent},
  {path:'contact', component:ContacComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
