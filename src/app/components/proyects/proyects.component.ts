import { Component } from '@angular/core';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {
  // images = ['../../../assets/pxfuel.jpg', '../../../assets/pxfuel2.jpg', '../../../assets/pxfuel2.jpg'];
  // constructor(private config: NgbCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   this.config.interval = 2000;
  //   this.config.wrap = true;
  //   this.config.keyboard = false;
  //   this.config.pauseOnHover = false;
  //   this.config.pauseOnFocus = true;
  //   this.config.showNavigationArrows = false;
  //   this.config.showNavigationIndicators = false;
  // }

  ngOnInit() {
    this.display();
  }

  display() {
    let res = ((window.innerHeight) >= window.scrollY) ? false : true;
    console.log('RESUL', res);
    return res;

  }
}
