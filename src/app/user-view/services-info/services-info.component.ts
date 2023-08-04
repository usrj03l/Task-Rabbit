import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.component.html',
  styleUrls: ['./services-info.component.css']
})
export class ServicesInfoComponent {
  hoveredIndex: number = -1;
  providerData: any;
  time: any = [];
  bYears:any;
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.providerData = JSON.parse(localStorage.getItem('serviceData') || '');
    this.time[0] = this.formatTime((this.providerData.orgDetails.openTime))
    this.time[1] = this.formatTime((this.providerData.orgDetails.closeTime))

    const date = new Date();
    const currentDate = date.getFullYear();
    
    this.bYears = currentDate - this.providerData.establishmentYear;
  }

  onStarHover(index: number): void {
    this.hoveredIndex = index;
  }

  rating(hoveredIndex: number) {
    const rating = hoveredIndex + 1;
    console.log(rating);
  }

  formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = + hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }
}
