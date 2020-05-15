import { TrainingServiceService } from './../services/TrainingService/training-service.service';
import { DatePipe } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Exercise } from './../interfaces/exercise';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { controllers } from 'chart.js';




@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, OnDestroy {
  constructor(
    private db: AngularFirestore,
    private servise:TrainingServiceService,
    private cd: ChangeDetectorRef,
    public datepipe: DatePipe,

  ) {}


  calories: Array<number[]> = [];
  date: Array<String[]> = [];
  private datechange: Array<any[]> = [];
  $destroyed: Subject<null> = new Subject();
  private user;

  ngOnInit(): void {
     this.user=this.servise.retrunactiveuser();
      console.log(this.user);
    this.db
      .collection('finishedExercise', (ref) =>
        ref.where('email', '==', this.user)
      )
      .snapshotChanges()
      .pipe(
        map((action) =>
          action.map((a) => (a.payload.doc.data() as Exercise).calories)
        ),
        takeUntil(this.$destroyed)
      )
      .subscribe((calories) => {
        console.log(calories);
        this.calories.push([...calories]);
        this.cd.detectChanges();
      });

    this.db
      .collection('finishedExercise', (ref) =>
        ref.where('email', '==', this.user)
      )
      .snapshotChanges()
      .pipe(
        map((action) =>
          action.map((a) => (a.payload.doc.data() as Exercise).featchDate)
        ),
        takeUntil(this.$destroyed)
      )
      .subscribe((date) => {
        console.log(date);
        this.date.push([...date]);
        this.cd.detectChanges();
        console.log(this.date[0]);
      });

  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [{ data: [], label: '' }];
  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  onsubmit() {
    console.log(...this.calories);
    let x = [this.calories[0]];
    console.log(x[0]);
    this.chartDatasets = [
      {
        data: x[0],
        label: 'Calories',
      },
    ];
    let s = [...this.date[0]];
   console.log(s);

    this.chartLabels = s;
    console.log(this.chartLabels)
  }

  ngOnDestroy() {
    this.$destroyed.next();
    this.$destroyed.complete();
  }
}
