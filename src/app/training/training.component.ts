import { TrainingServiceService } from './../services/TrainingService/training-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  ongoingTraining=false;
  exercisesubscription=new Subscription;





  
  constructor(private service:TrainingServiceService) { }

  ngOnInit(): void 
  {
    this.exercisesubscription=this.service.exerciseChanged.subscribe(
      exercise=>{
        if(exercise)
        {
          this.ongoingTraining=true;
        }
        else{
          this.ongoingTraining=false;
        }
    });
  }





}
