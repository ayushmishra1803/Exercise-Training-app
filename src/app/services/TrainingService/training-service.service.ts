import { AngularFirestore } from '@angular/fire/firestore';
import { Exercise } from './../../interfaces/exercise';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {

  exerciseChanged=new Subject<Exercise>();
 private runningExercise:Exercise;
 private fbsub:Subscription[]=[];
  

  finishedExerciseChanged =new Subject<Exercise[]>();




 private availableExercises:Exercise[] =[
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
];

    




  getAvailableExercises()
  {
    return this.availableExercises.slice();
  }


  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }





  getRunningExercise()
  {
    return {...this.runningExercise};
  }





  completeExercise()
  {
    this.adddatatodatabse({...this.runningExercise,date:new Date(),state:'completed'});
    this.runningExercise=null;
    this.exerciseChanged.next(null);
  }






  cancelExercise(progress:number)
  {
    this.adddatatodatabse({ ...this.runningExercise, duration: this.runningExercise.duration * (progress / 100), calories: this.runningExercise.calories * (progress / 100), date: new Date(), state: 'cancelled' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchgetCompletedOrCancelledExercises() {
    this.fbsub.push(this.db.collection('finishedExercise').valueChanges().subscribe((exercises:Exercise[])=>{
      
      this.finishedExerciseChanged.next(exercises);
    }));
  }



  adddatatodatabse(exercise:Exercise)
  {
    this.db.collection('finishedExercise').add(exercise);
  }

  cancelSubscription()
  {
    this.fbsub.forEach(sub=>sub.unsubscribe());
  }

  constructor(private db:AngularFirestore) { }
}
