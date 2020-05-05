import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Exercise } from './../../interfaces/exercise';
import { TrainingServiceService } from './../../services/TrainingService/training-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import{map}from'rxjs/operators';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

   @Output()trainingStart=new EventEmitter<void>();

   exercises:Exercise[]=[];




  constructor(private service:TrainingServiceService ,private db:AngularFirestore) { }

  ngOnInit(): void
 {
   this.exercises=this.service.getAvailableExercises();
  
  }
  

 onStartTraining(form:NgForm)
  {
    
   this.service.startExercise(form.value.exercise);
   
  }



}
