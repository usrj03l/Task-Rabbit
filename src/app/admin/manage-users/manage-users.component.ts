import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  searchText:string = '';
  users$ = new Observable<any>();

  constructor(private http:HttpClient,private api:ApiService) { }

  searchUsers(){
    this.users$ = this.http.get(this.api.url + `admin/users?searchText=${this.searchText}`);
  }

  disable(user:any){
    const uid = user.uid;
    let disable = 'disabled'
    if(user.disabled === true){
      disable = 'enabled';
    }else{
      disable = 'disabled'
    }

    Swal.fire({
      icon:'warning',
      title: 'Do you want to continue?',
      showCancelButton: true,
      confirmButtonText: 'Continue',
    }).then((result) => {
      if (result.isConfirmed) {        
        this.http.put(this.api.url + 'admin/user/',{uid}).subscribe();
        Swal.fire(`The account is ${disable}`, '', 'success').then(()=> this.searchUsers());
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
