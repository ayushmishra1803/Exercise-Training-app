import { map, retry } from 'rxjs/operators';
import { Observable, Subscription, Subject } from 'rxjs';

import { Exercise } from './../interfaces/exercise';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

import { __values } from 'tslib';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(private db:AngularFirestore) { }

  data:Observable<Exercise[]>;
  array:number[];
  calories:Subject<Exercise[]>;
  value:number[];


  ngOnInit(): void {

    this.data = this.db.collection('finishedExercise').snapshotChanges().pipe(map(action=>{
      return action.map(a=>{
        const data=a.payload.doc.data() as Exercise
        const id=a.payload.doc.id;
        return ({id,...data});
      })
    }))
    this.data.subscribe(re=>{
      if(re)
      {
          console.log(re)
      }
    })


  }




  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ["Monday","Tuesday","Wednesday","Thrusday"];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
