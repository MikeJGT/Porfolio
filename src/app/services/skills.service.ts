import { Injectable } from '@angular/core';
import { skillsInfo } from '../constants/skills_info.constant';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  /**
* @description Gives a list of Skills from constant file.
* @returns {Skill[]} A list with all skills.
*/
  getAllSkills(): Skill[] {
    return skillsInfo;
  }
}
