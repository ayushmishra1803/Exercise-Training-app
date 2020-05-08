import { SharedService } from './../services/shared/shared.service';
import { Router } from '@angular/router';
import { Feed } from './../interfaces/feedback/feed';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private db:AngularFirestore,private router:Router,private shared:SharedService) { }
  feedback:Feed[];
 

  onsubmit(f:NgForm)
  {
    
   this.feedback=[{
     name:f.value.email,
     feed:f.value.feedback
   }];
   this.add({
     name: f.value.email,
     feed: f.value.feedback
   });
   
  }
  add(feed:Feed)
  {
    this.db.collection('feedback').add(feed);
    this.shared.Showsnackbar('Thanks For Your FeedBack',null,3000);
    this.router.navigate(['/training']);

  }
  ngOnInit(): void {
    
  }

}
