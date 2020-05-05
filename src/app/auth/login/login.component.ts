import { AuthService } from './../../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  onsubmit(f:NgForm)
  {
    this.service.login({
      email:f.value.email,
      password:f.value.password
    })
  }

}
