import { Component } from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-the-proyect',
  templateUrl: './the-proyect.component.html',
  styleUrls: ['./the-proyect.component.scss']
})
export class TheProyectComponent {
  proyect: Proyects;
  images: Array<String>;

  constructor(private proyectSV: ProyectsService) {
    this.proyect = this.proyectSV.getOneProyect(this.proyectSV.getProyectId())!;
    this.images = [
      "../../../assets/angular.png",
      "../../../assets/git.png",
      "../../../assets/jenkins.png"
    ]
  }
}
