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
  providerData:any;
  time:any
  constructor(private api:ApiService){ }

  ngOnInit(){
     this.providerData = JSON.parse(localStorage.getItem('serviceData') || ''); 
      this.time = (this.providerData.orgDetails.openTime > 12)? 24 - this.providerData.orgDetails.openTime.split(':').shift():this.providerData.orgDetails.openTime.split(':').shift()
    
  }

  onStarHover(index: number): void {
    this.hoveredIndex = index;
  }

  rating(hoveredIndex: number) {
    const rating = hoveredIndex + 1;
    console.log(rating);
  }
}
