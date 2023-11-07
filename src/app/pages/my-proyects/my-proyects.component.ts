import { Component } from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-my-proyects',
  templateUrl: './my-proyects.component.html',
  styleUrls: ['./my-proyects.component.scss']
})
export class MyProyectsComponent {
  proyects: Array<Proyects>;
  constructor(private proyectSV: ProyectsService) {
    this.proyects = this.proyectSV.getAllProyects();
  }


  /**
   * @description Set the proyect id in local storage, used to load the proyect in the-proyect page.
   * @param {number} id The proyect Id.
   * @returns {Void} Void.
   */
  goToProyect(id: number) {
    this.proyectSV.setOneProyect(id);
  }
}
