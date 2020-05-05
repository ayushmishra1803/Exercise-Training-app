import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit ,OnDestroy{

  @Output() sidenavToggle=new EventEmitter<void>();
  isAuth=false;
  authsubscription:Subscription;




  constructor(private service:AuthService) { }
 

  onToggleSidenav()
  {
    this.sidenavToggle.emit();
  }
  ngOnInit(): void {

    this.authsubscription=this.service.authChange.subscribe(authStatus=>{
        this.isAuth=authStatus;
    });
     
  } 
  
  ngOnDestroy(): void 
  {
      this.authsubscription.unsubscribe();
  }

  onLogout(){
    this.service.logout();
  }
}
