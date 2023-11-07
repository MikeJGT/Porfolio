import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsTabComponent } from './components/skills-tab/skills-tab.component';
import { MyProyectsComponent } from './pages/my-proyects/my-proyects.component';
import { TheProyectComponent } from './pages/the-proyect/the-proyect.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyects', component: MyProyectsComponent },
  { path: 'the-proyect', component: TheProyectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsTabComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
