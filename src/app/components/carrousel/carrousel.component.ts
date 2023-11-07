import { Component, Input } from '@angular/core';

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  @Input() images: Array<Array<String>>;
  constructor() {
    this.images = [
      ['../../assets/mapLeaflet.png 300w', '../../assets/leafletMap600_1.png 600w'],
      ['../../assets/leafletMap_Bici.png 300w', '../../assets/leafletMap600_2.png 600w'],
      ['../../assets/mapLeaflet.png 300w', '../../assets/leafletMap600_3.png 600w']
    ];
  }
}
