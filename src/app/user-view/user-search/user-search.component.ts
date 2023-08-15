import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  searchQuery: string = '';
  serviceType: string = '';
  state: string = '';
  result: any

  @ViewChild('resultsSection') resultsSection!: ElementRef;

  constructor(private http: HttpClient, private router:Router) { }

  sendQuery() {
    this.http.get(`http://localhost:3000/provider/search?q=${this.searchQuery}&serviceType=${this.serviceType}&state=${this.state}`)
    .pipe(take(1))
      .subscribe(data => this.result = data);
  }

  selectCity(event: any) {
    this.state = event.target.value;
  }

  selectService(event: any) {
    this.serviceType = event.target.value;
  }
  
  navigateToResultsSection(): void {
    this.router.navigate(['/user'], { fragment: 'results' });
  }
}
