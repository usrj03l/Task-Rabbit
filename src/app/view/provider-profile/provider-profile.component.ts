import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { appointment } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent {

  defaultProfile = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  profile: any;
  bio: string = "Write something about yourself";
  currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
  enquiries$ = new Observable<any>();
  profileData$ = new Observable<any>();
  appointmentData$ = new Observable<any>();

  constructor(private auth: AuthService, private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.loadProfile();
    this.loadEnquiries();
    this.loadAppointments();
  }

  loadProfile() {
    const id = this.currentUser.uid;
    this.profileData$ = this.http.get('http://localhost:3000/provider/getUser/' + id)
  }

  loadEnquiries() {
    this.enquiries$ = this.api.getEnquiries(this.currentUser.uid);
  }

  loadAppointments() {
    const id = this.currentUser.uid;
    this.appointmentData$ = this.api.getAppointments(id).pipe(
      map(data => 
        data?.userDetails.filter(data => data.completed !== true)
        .map(data => data.name)),
    );
  }

  remove(enquiry: any, id: string) {
    const deleteObject = {
      providerUid: id,
      userUid: enquiry.userUid
    }
    this.enquiries$ = this.api.removeEnquiry(deleteObject)
  }

  async imageUpload() {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {
      const id = this.currentUser.uid;
      const formData = new FormData();
      formData.append('uid', String(id));
      formData.append('image', file as File);
      this.http.post('http://localhost:3000/provider/profilePic', formData).subscribe(
        image => {
          const imgPath = image;
          this.profile = 'http://localhost:3000/images/' + imgPath;
        }
      );
    }
  }

  async updateBio() {
    const text = await this.api.textArea();
    const id = this.currentUser.uid;
    this.http.post("http://localhost:3000/provider/setBio", { 'bio': text, 'uid': id }).pipe(take(1)).subscribe();
    this.profileData$ = this.profileData$.pipe(tap(data => data.bio = text));
  }

  editProfile() {
    this.router.navigate(['/view/edit-profile']);
  }

  chat(uid: string) {
    this.http.post('http://localhost:3000/user/getUsers', { 'users': uid }).pipe(take(1)).subscribe((data: any) => {
      this.api.checkUsers.next(data[0]);
      this.router.navigate(['/view/chat']);
    });
  }

  gotoAppointments() {
    this.router.navigate(['/view/appointments'])
  }
}
