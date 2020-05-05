import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private  service:AuthService) { }

  maxDate;

  ngOnInit(): void 
  {
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
