import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-trainingstop',
  templateUrl: './trainingstop.component.html',
  styleUrls: ['./trainingstop.component.scss']
})
export class TrainingstopComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any) { }

  ngOnInit(): void {
  }

}
