import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Api } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  angForm:FormGroup;
  business:any={}
    constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: Api,
    private fb: FormBuilder) {
    this.createForm();
    }
    
  ngOnInit() {
this.route.params.subscribe(params=>{
  this.bs.editProfile(params['id']).subscribe(res=>this.business=res)
})
  }
 createForm(){
    this.angForm=this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      country:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required]
    });
 }
 updateBusiness(fname,lname,email,address,mobile,country,state,city){
    this.route.params.subscribe(params=>{
      this.bs.UpdateProfile(fname,lname,email,address,mobile,country,state,city,params['id']);
      this.router.navigate(['/']);
    })
 }
}
