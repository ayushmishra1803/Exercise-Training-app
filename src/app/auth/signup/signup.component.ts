import { SharedService } from './../../services/shared/shared.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private  service:AuthService,private shared:SharedService) { }

  maxDate;
  isloading = false;
  private loadingsub: Subscription;

  ngOnInit(): void 
  {
    this.loadingsub=this.shared.loadingStatechanged.subscribe(load=>{
      this.isloading=load;
    })
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  
  }
  onsubmit(f:NgForm)
  {
    this.service.registerUser({
      email:f.value.email,
      password:f.value.password
    })
  }

}
