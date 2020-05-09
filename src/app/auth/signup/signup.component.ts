import { TrainingServiceService } from './../../services/TrainingService/training-service.service';

import { Userdetails } from './../../interfaces/userdetails/userdetails';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private  service:AuthService,private shared:SharedService,private db:AngularFirestore,
   private training:TrainingServiceService) { }

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
    this.adduser({
      name:f.value.name,
      email :f.value.email,
      
     });
    this.training.activeuser(f.value.email);
  }

  adduser(user:Userdetails)
  { 
    this.db.collection('users').add(user)
    this.shared.Showsnackbar("Profile Created",null,3000);

  }
  
 

  


}
