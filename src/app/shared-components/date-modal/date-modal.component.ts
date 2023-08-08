import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.css'],
})

export class DateModalComponent {

  @Output() setDate = new EventEmitter();

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  currentMonth = 'January'
  days = 31;
  currentDay = 1;
  openTime: string = ''
  closeTime: string = ''


  selectMonth(event: any) {
    this.currentMonth = event.target.value;

    if (this.currentMonth === 'February') {
      this.days = 29;
    }else if([0,2,4,6,7,9,11].includes(this.months.indexOf(this.currentMonth))){
      this.days = 31;
    }else{
      this.days = 30;
    }
  }

  setDay(event: any) {
    this.currentDay = event.target.value;
  }

  setOpenTime(event: any) {
    this.openTime = event.target.value
  }

  setCloseTime(event: any) {
    this.closeTime = event.target.value
  }

  setDateTime() {

    this.setDate.emit({
      openTime: this.openTime,
      closeTime: this.closeTime,
      day: this.currentDay,
      month: this.currentMonth
    });
  }

}