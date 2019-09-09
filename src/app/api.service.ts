import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Api{
    url='/';
    constructor(private http:HttpClient){}
    addProfile(fname,lname,email,address,mobile,country,state,city){
         const data={
             first_name:fname,
             last_name:lname,
            email:email,
            address:address,
            mobile:mobile,
            country:country,
            state:state,
            city:city, 
         }
     this.http.post(`${this.url}/add`,data).subscribe(res=>console.log("insert successfully..."));
    }
    editProfile(id){
     return this.http.get(`${this.url}/edit/${id}`);
   }
    getAllUserList(){
    return this.http.get(`${this.url}`);
    }
    deleteUserInfo(id){
      return  this.http.get(`${this.url}/delete/${id}`);
    }
    ViewUserInfo(id){
        return this.http.get(`${this.url}/view/${id}`);
    }
  UpdateProfile(fname,lname,email,address,mobile,country,state,city,id){
        const data={
            first_name:fname,
            last_name:lname,
           email:email,
           address:address,
           mobile:mobile,
           country:country,
           state:state,
           city:city,
        }
       return this.http.post(`${this.url}/update/${id}`,data).subscribe(res=>console.log("updated successfully..."));
   }
}