import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  loadingStatechanged=new Subject<boolean>();

  Showsnackbar(message,action,duration)
{
  this.mat.open(message,action,{
    duration:duration
  })
}



  constructor(private mat:MatSnackBar) { }
}
