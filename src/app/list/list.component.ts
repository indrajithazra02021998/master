import { Component, OnInit } from '@angular/core';
 import {Api} from '../api.service';
import ApiClient from '../apiMessageClass/api';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  api:ApiClient[];
  constructor( private Api:Api) { }
  ngOnInit() {
    this.Api.getAllUserList().subscribe((data:ApiClient[])=>this.api=data);
  }
  viewUserInfo(id){
   this.Api.ViewUserInfo(id).subscribe(res=>console.log('done'));
  }
  deleteUser(id){
  this.Api.deleteUserInfo(id).subscribe(res=>console.log('deleled'));
}
editUserProfile(id){
 this.Api.editProfile(id).subscribe(res=>console.log('editing is over'));
}

}
