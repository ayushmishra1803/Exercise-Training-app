import { SharedService } from './../shared/shared.service';
import { TrainingServiceService } from './../TrainingService/training-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from './../../interfaces/AuthData/auth-data';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {  MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,
    private afauth:AngularFireAuth,
    private service:TrainingServiceService
    ,private matsncakebar:MatSnackBar,
    private shared:SharedService) { }


 
  authChange=new Subject<boolean>();
  private auth=false;










  registerUser(authData:AuthData)
  {
    this.shared.loadingStatechanged.next(true);
    this.afauth.createUserWithEmailAndPassword(
      authData.email,
      authData.password,
    ).then(result=>{
      this.shared.loadingStatechanged.next(false);
      console.log(result);
     
    })
    .catch(error=>{
      this.shared.loadingStatechanged.next(false);
      this.shared.Showsnackbar(error.message, null, 3000);
    })
   
  }


  login(authData:AuthData)
{
  this.shared.loadingStatechanged.next(true);
  this.afauth.signInWithEmailAndPassword(
    authData.email,
    authData.password
  ).then(result => {
    this.shared.loadingStatechanged.next(false);
    console.log(result);
    
  })
    .catch(error => {
      this.shared.loadingStatechanged.next(false); 
      
      this.shared.Showsnackbar(error.message,null,3000);
     
    }) 
}





  logout(){
    this.afauth.signOut();
    this.service.activeuser(null);
   
  }

  
  isAuth()
  {
    return this.auth ;
  }



  


  AuthListener()
  {
    this.afauth.authState.subscribe(result=>{
      if(result)
      {
        this.auth = true;
        this.authChange.next(true);
        
        this.router.navigate(['/training']); 
      }
      else{

        this.service.cancelSubscription();


        this.authChange.next(false);
        this.router.navigate(['']);
        this.auth = false;
      }
    }
    )
  }

}
