import { Component } from '@angular/core';

@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.component.html',
  styleUrls: ['./services-info.component.css']
})
export class ServicesInfoComponent {
  hoveredIndex: number = -1;

  onStarHover(index: number): void {
    this.hoveredIndex = index;
  }

  rating(hoveredIndex: number) {
    const rating = hoveredIndex + 1;
    console.log(rating);

  }
}
