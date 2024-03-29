import { AngularFirestore } from '@angular/fire/firestore';
import { Exercise } from './../../interfaces/exercise';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TrainingServiceService {
  exerciseChanged = new Subject<Exercise>();
  private runningExercise: Exercise;
  private fbsub: Subscription[] = [];
  private active: string;

  activeuser(user: string) {
    this.active = user;
  }
  retrunactiveuser() {
    return this.active;
  }

  finishedExerciseChanged = new Subject<Exercise[]>();

  private availableExercises: Exercise[] = [
    {
      id: '30-min-Walk-challenge',
      name: '30-min-Walk-challenge',
      duration: 600,
      calories: 42.33,
    },
    {
      id: 'Suraya Namaskar',
      name: 'Suraya Namaskar',
      duration: 600,
      calories: 37.8,
    },
    { id: 'Halasana', name: 'Halasana', duration: 180, calories: 15 },
    { id: 'Plank', name: 'Plank', duration: 300, calories: 20 },
    { id: 'Chair Pose', name: 'Chair Pose', duration: 120, calories: 11 },
    { id: 'Wheel-Pose', name: 'Wheel-pose', duration: 60, calories: 3 },
    { id: 'Dolpin-Pose', name: 'Dolpin-Pose', duration: 60, calories: 2.8 },
  ];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      (ex) => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    let s = new Date();
    let x = this.date.transform(s, 'dd-MM-yyyy').toString();
    this.adddatatodatabse({
      ...this.runningExercise,
      date: new Date(),
      featchDate: x,
      state: 'completed',
      email: this.active,
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    let s = new Date();
    let x = this.date.transform(s, 'dd-MM-yyyy').toString();
    this.adddatatodatabse({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      featchDate: x,
      state: 'cancelled',
      email: this.active,
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchgetCompletedOrCancelledExercises() {
    this.fbsub.push(
      this.db
        .collection('finishedExercise', (ref) =>
          ref.where('email', '==', this.active)
        )
        .valueChanges()
        .subscribe((exercises: Exercise[]) => {
          this.finishedExerciseChanged.next(exercises);
        })
    );
  }

  adddatatodatabse(exercise: Exercise) {
    this.db.collection('finishedExercise').add(exercise);
  }

  cancelSubscription() {
    this.fbsub.forEach((sub) => sub.unsubscribe());
  }

  constructor(private db: AngularFirestore, private date: DatePipe) {}
}
