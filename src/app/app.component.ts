import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    AOS.init({ duration: 1500 });
    window.addEventListener('load', AOS.refresh);
  }

  onActivate() {
    window.scroll(0, 0);
  }

}
