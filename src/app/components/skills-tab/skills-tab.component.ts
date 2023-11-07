import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.scss']
})

export class SkillsTabComponent {

  skills: Array<Skill>;

  constructor(private skillsSV: SkillsService) {
    this.skills = this.skillsSV.getAllSkills();
  }
}
