import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNow: boolean;

  prevScrollpos: any;
  constructor() {
    this.showNow = false;
    this.prevScrollpos = window.scrollY
  }


  /**
 * @description display the screen-div an show/hide the menu.
 * @returns {void} Void
 */
  showMenu(): void {
    this.hideMenu();
    this.showNow = !this.showNow;
  }

  /**
   * @description On small,medium mediaQueries display a screen-div to close menu. Use in mobile devices to avoid sticky menu.
   * @returns {void} Void
   */
  hideMenu(): void {
    const divBefore = document.getElementById('hideMenu');
    const wrapper = document.getElementById('wrapper');
    const div = document.createElement('div');

    div.id = 'hideMenu';
    div.style.cssText = `
    width: 100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    z-index:10;`;

    if (divBefore) {
      divBefore?.remove();
    } else {
      wrapper!.appendChild(div);
    }

    div?.addEventListener('click', () => {
      div?.remove();
      this.showNow = false;
    });
  }


  /**
 * Description: Hide header on scroll down, show on scroll up.
 */
  @HostListener("window:scroll", []) onWindowScroll() {
    var currentScrollPos = window.scrollY;
    if (this.prevScrollpos > currentScrollPos) {
      document.getElementById("wrapper")!.style.top = "0";
    } else {
      document.getElementById("wrapper")!.style.top = "-80px";
    }
    this.prevScrollpos = currentScrollPos;
  }
}
