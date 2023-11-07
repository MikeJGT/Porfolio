import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsTabComponent } from './components/skills-tab/skills-tab.component';
import { MyProyectsComponent } from './pages/my-proyects/my-proyects.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { TheProyectComponent } from './pages/the-proyect/the-proyect.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    SkillsTabComponent,
    MyProyectsComponent,
    CarrouselComponent,
    TheProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
