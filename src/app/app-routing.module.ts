import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

const routes: Routes = [
  { path: '', component: ProyectsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
