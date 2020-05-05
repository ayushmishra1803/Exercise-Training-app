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
    
  })
    .catch(err => {
      console.log(err);
    }) 
}





  logout(){
    this.afauth.signOut();
   
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
        this.router.navigate(['/login']);
        this.auth = false;
      }
    }
    )
  }

}
