import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  defaultProfile = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  profile: any;
  profileData: any;

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    const id = await this.auth.getId();
    this.http.post('http://localhost:3000/user/getUsers',{'users':id}).subscribe(
      (data:any) => {
        this.profileData = data[0];
        if (this.profileData.profilePic) {
          this.profile = 'http://localhost:3000/images/' + this.profileData.profilePic?.split('\\').pop();
        }
      });
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
      const id = await this.auth.getId();
      const formData = new FormData();
      formData.append('uid', String(id));
      formData.append('image', file as File);
      this.http.post('http://localhost:3000/user/profilePic', formData).subscribe(
        image => {
          const imgPath = image;
          this.profile = 'http://localhost:3000/images/' + imgPath;
        }
      );
    }
  }
}
