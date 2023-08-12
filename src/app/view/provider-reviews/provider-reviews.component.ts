import { Component } from '@angular/core';
import { Observable, map, reduce, switchMap, tap, toArray } from 'rxjs';
import { review } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-provider-reviews',
  templateUrl: './provider-reviews.component.html',
  styleUrls: ['./provider-reviews.component.css']
})
export class ProviderReviewsComponent {
  currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
  reviews$ = new Observable<review>();
  ratings$ = new Observable<number[]>();
  totalRatingCount:number = 0;
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.reviews$ = this.api.getReviews(this.currentUser.uid);

    this.ratings$ = this.reviews$.pipe(
      map(review =>  {
        this.totalRatingCount = review.totalRatingCount;
        return review.reviewList.map(data => data.userRating)
      }),
      switchMap(data => {
        const ratingList = [0,0,0,0,0]

        data.forEach(e =>{
          if(!ratingList[e-1]){
            ratingList[e-1]++; 
          }else{
            ratingList[e-1]++;
          }
        })
        return ratingList;
      }),
      map(data => Math.floor(data/this.totalRatingCount*100)),
      toArray(),
    )
  }
}
