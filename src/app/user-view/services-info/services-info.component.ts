import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.component.html',
  styleUrls: ['./services-info.component.css']
})
export class ServicesInfoComponent {
  defaultProfile = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  hoveredIndex: number = -1;
  providerData: any;
  time: any = [];
  bYears: any;
  reviewData: any
  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit() {
    this.providerData = JSON.parse(localStorage.getItem('serviceData') || '');
    this.time[0] = this.formatTime((this.providerData.orgDetails.openTime));
    this.time[1] = this.formatTime((this.providerData.orgDetails.closeTime));
    const date = new Date();
    const currentDate = date.getFullYear();
    this.bYears = currentDate - this.providerData.establishmentYear;

    this.loadReviews();
  }

  onStarHover(index: number): void {
    this.hoveredIndex = index;
  }

  async rating(hoveredIndex: number) {
    const rating = hoveredIndex + 1;
    const userReview = await this.api.textArea();
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
    const reviews = {
      rating: rating,
      review: userReview,
      senderId: currentUser.uid,
      recepientId: this.providerData.uid,
      profilePic: currentUser.profilePic,
      name: currentUser.fname + ' ' + currentUser.lname
    }
    this.api.sendReviews(reviews);
  }

  formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = + hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  loadReviews() {
    this.api.getReviews(this.providerData.uid).subscribe(data => {
      this.reviewData = data;
    });
  }

  latest() {
    this.reviewData.reviewList.sort((a: { reviewDate: any; }, b: { reviewDate: any; }) => this.compareDates(a.reviewDate, b.reviewDate));
  }

  compareDates(a: any, b: any) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    const [dayA, monthA] = a.split(" ");
    const [dayB, monthB] = b.split(" ");

    const monthIndexA = monthNames.indexOf(monthA);
    const monthIndexB = monthNames.indexOf(monthB);

    if (monthIndexA > monthIndexB) return -1;
    if (monthIndexA < monthIndexB) return 1;

    if (dayA > dayB) return -1;
    if (dayA < dayB) return 1;

    return 0;
  }

  sortHighToLow(){
    this.reviewData.reviewList.sort((a:any,b:any)=>{
      return b.userRating - a.userRating;
    })
  }
}
