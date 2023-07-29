import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  searchQuery: string = '';
  serviceType: string = '';
  city: string = '';
  result: any

  @ViewChild('resultsSection') resultsSection!: ElementRef;

  constructor(private http: HttpClient, private router:Router) { }

  sendQuery() {
    this.http.get(`http://localhost:3000/provider/search?q=${this.searchQuery}&serviceType=${this.serviceType}&city=${this.city}`)
      .subscribe(data => this.result = data);
  }

  selectCity(event: any) {
    this.city = event.target.value;
  }

  selectService(event: any) {
    this.serviceType = event.target.value;
  }
  
  navigateToResultsSection(): void {
    // Navigate to the '/user' route with the fragment 'results'
    this.router.navigate(['/user'], { fragment: 'results' });
  }
}
