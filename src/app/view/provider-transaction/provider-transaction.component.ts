import { Component } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-provider-transaction',
  templateUrl: './provider-transaction.component.html',
  styleUrls: ['./provider-transaction.component.css']
})
export class ProviderTransactionComponent {
  transactions$ = new Observable<any>();
  totalIncome=0;

  constructor(private api:ApiService) {}

  ngOnInit(){
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
    this.transactions$ = this.api.getFullTransaction(currentUser.uid).pipe(map(data => data.bill),
    tap(data => data.map(transaction => this.totalIncome+=transaction.totalCost))
    );
  }
}
