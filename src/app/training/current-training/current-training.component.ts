import { TrainingServiceService } from './../../services/TrainingService/training-service.service';
import { TrainingstopComponent } from './../../dialog/trainingstop/trainingstop.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, } from '@angular/core';




@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {


  

  progress= 0;
  timer:number;

  constructor(private dialog:MatDialog,private service:TrainingServiceService) { }

  ngOnInit(): void {
    this.startOrResumeTraining();
  }

  startOrResumeTraining()
  {
    const step=this.service.getRunningExercise().duration /100 *1000;
    this.timer=setInterval(()=>{
      this.progress=this.progress + 1;
      if(this.progress>=100)
      {
        this.service.completeExercise();
        clearInterval(this.timer);
      }
    },step);
  }

  onstop()
  {
    clearInterval(this.timer);
    const dialogRef=this.dialog.open(TrainingstopComponent,{
      data:{
      progress:this.progress
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    if(result)
    {
      this.service.cancelExercise(this.progress);
    }
    else{
      this.startOrResumeTraining();
    }
  })
  }

}
