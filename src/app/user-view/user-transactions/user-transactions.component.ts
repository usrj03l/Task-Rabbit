import { Component, Input } from '@angular/core';
import { Observable, filter, map, of, tap } from 'rxjs';


@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent {
  @Input() billDetails$ = new Observable<any>();
  searchData$ = new Observable();
  search: string = '';

  ngOnInit() {
    this.searchData$ = this.billDetails$.pipe(map(data => data));
  }

  searchBill() {
    if(this.search === ''){
      this.clear();
    }
    const regex = RegExp(this.search,'i')
    this.billDetails$ = this.billDetails$.pipe(map(value => value.filter(((data: { orgName: string; }) => regex.test(data.orgName)))))
  }

  clear(){
    this.billDetails$ = this.searchData$;
    this.search = '';
  }
}
