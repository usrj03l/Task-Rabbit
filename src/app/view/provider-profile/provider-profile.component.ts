import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private auth: AuthService, private http: HttpClient) { }

  profileData: any;

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    const id = await this.auth.getId();
    this.http.get('http://localhost:3000/provider/getUser/' + id).subscribe(data => this.profileData = data);
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
      this.http.post('http://localhost:3000/provider/profilePic', formData).subscribe(
        image => {
          const imgPath = image;
          this.profile = 'http://localhost:3000/images/' + imgPath;
        }
      );
    }
  }

  async updateBio() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      const id = await this.auth.getId();
      this.http.post("http://localhost:3000/provider/setBio", { 'bio': text, 'uid': id }).subscribe();
      this.bio = text
    }
  }
}
