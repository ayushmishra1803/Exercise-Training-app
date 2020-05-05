import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit ,OnDestroy{

  @Output() closesidenav=new  EventEmitter<void>();


  isAuth=false;
  authsubscription:Subscription;








  constructor(private service:AuthService) { }
 
  ngOnInit(): void 
  {

       this.authsubscription=this.service.authChange.subscribe(authStatus=>
        {
            this.isAuth=authStatus;
        });

  }


ngOnDestroy(): void 
{
  this.authsubscription.unsubscribe();   
}


onLogut()
{
  this.service.logout();
  this.onclose();
}


  onclose()
  {
    this.closesidenav.emit();
  }

}
