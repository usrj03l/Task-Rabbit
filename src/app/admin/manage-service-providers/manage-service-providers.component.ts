import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-service-providers',
  templateUrl: './manage-service-providers.component.html',
  styleUrls: ['./manage-service-providers.component.css']
})
export class ManageServiceProvidersComponent {

  searchText:string = '';
  providers$ = new Observable<any>();

  constructor(private http:HttpClient,private api:ApiService) { }

  searchUsers(){
    this.providers$ = this.http.get(this.api.url + `admin/providers?searchText=${this.searchText}`);
  }

  disable(uid:string){
    Swal.fire({
      icon:'warning',
      title: 'Do you want to continue?',
      showCancelButton: true,
      confirmButtonText: 'Continue',
    }).then((result) => {
      if (result.isConfirmed) {        
        this.http.put(this.api.url + 'admin/provider/',{uid}).subscribe();
        Swal.fire('The account is disabled', '', 'success').then(()=> this.searchUsers());        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
