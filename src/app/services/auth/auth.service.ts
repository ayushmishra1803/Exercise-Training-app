import { TrainingServiceService } from './../TrainingService/training-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from './../../interfaces/AuthData/auth-data';
import { User } from './../../interfaces/user/user';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private afauth:AngularFireAuth,private service:TrainingServiceService) { }


 
  authChange=new Subject<boolean>();
  private auth=false;










  registerUser(authData:AuthData)
  {
    this.afauth.createUserWithEmailAndPassword(
      authData.email,
      authData.password,
    ).then(result=>{
      console.log(result);
      this.authSuccessfully();
    })
    .catch(err=>{
      console.log(err);
    })
   
  }


  login(authData:AuthData)
{
  this.afauth.signInWithEmailAndPassword(
    authData.email,
    authData.password
  ).then(result => {
    console.log(result);
    this.authSuccessfully();
  })
    .catch(err => {
      console.log(err);
    }) 
}


  logout(){
    this.service.cancelSubscription();
    this.afauth.signOut();
  
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.auth = false;
  }

  
  isAuth()
  {
    return this.auth ;
  }



  private authSuccessfully()
  {
    this.auth=true;
    this.authChange.next(true);
    this.router.navigate(['/training']); 
  }

}
