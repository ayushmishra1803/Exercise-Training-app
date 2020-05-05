import { Subscription } from 'rxjs';
import { TrainingServiceService } from './../../services/TrainingService/training-service.service';
import { Exercise } from './../../interfaces/exercise';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit,AfterViewInit ,OnDestroy{

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private exchangedSub:Subscription;

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) Paginator:MatPaginator;



  constructor(private service:TrainingServiceService) { }



  ngOnDestroy(): void {
   this.exchangedSub.unsubscribe();  
  }




  onFilter(filtervalue)
  {
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }

  ngAfterViewInit(): void 
  {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.Paginator;

  }

  
  
  
  ngOnInit(): void {
   this.exchangedSub= this.service.finishedExerciseChanged.subscribe((exercise:Exercise[])=>{
      this.dataSource.data=exercise;
    });
     this.service.fetchgetCompletedOrCancelledExercises();
  }

}
