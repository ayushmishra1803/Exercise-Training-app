import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'training-app';
  
 constructor(private service:AuthService){}

  ngOnInit(): void {
    this.service.authChange.next(false);
    this.service.AuthListener();

  }
}
