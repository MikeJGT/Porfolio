import { Injectable } from '@angular/core';
import { proyectsInfo } from '../constants/proyects_info.constant';
import { Proyects } from '../interfaces/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  /**
   * @description Gives a list of Proyects from constant file.
   * @returns {Proyects[]} An array of proyects
   */
  getAllProyects(): Proyects[] {
    return proyectsInfo;
  }


  /**
  * @description Save a proyect Id on local storage.
  * @param {number} id The Proyect Id.
  * @returns {void} Void
  */
  setOneProyect(id: number): void {
    localStorage.setItem('proyect-id', JSON.stringify(id));
  }


  /**
 * @description Get the proyect id from local storage.
 * @returns {number} The proyect id.
 */
  getProyectId(): number {
    return JSON.parse(localStorage.getItem('proyect-id')!);
  }


  /**
* @description Find and return one proyect from Proyects list.
* @param {number} id Of the proyect to return.
* @returns {Proyects} The proyect.
*/
  getOneProyect(id: number): Proyects | undefined {
    return proyectsInfo.find(proyect => proyect.id === id);
  }
}
