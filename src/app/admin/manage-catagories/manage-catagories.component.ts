import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-catagories',
  templateUrl: './manage-catagories.component.html',
  styleUrls: ['./manage-catagories.component.css']
})
export class ManageCatagoriesComponent {
  state: string = '';
  jobType: string = '';
  stateList: string[] = [];
  jobList: string[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<[]>('http://localhost:3000/admin/states').subscribe(data => this.stateList = data);
    this.http.get<[]>('http://localhost:3000/admin/services').subscribe(data => this.jobList = data);

  }

  addData() {
    (this.state.length > 0) ? this.stateList.push(this.state.toLowerCase()) : null;
    this.state = '';
  }
  remove(state: string) {
    const index = this.stateList.findIndex(e => e === state);
    this.stateList.splice(index, 1);
  }

  addJob() {
    (this.jobType.length > 0) ? this.jobList.push(this.jobType.toLowerCase()) : null;
    this.jobType = '';
  }

  removeJob(job: string) {
    const index = this.jobList.findIndex(e => e === job);
    this.jobList.splice(index, 1);
  }

  save() {
    this.http.post('http://localhost:3000/admin/addState', { 'stateList': this.stateList }).subscribe();
  }

  saveJob() {
    this.http.post('http://localhost:3000/admin/addServices', { 'jobList': this.jobList }).subscribe();
  }
}
