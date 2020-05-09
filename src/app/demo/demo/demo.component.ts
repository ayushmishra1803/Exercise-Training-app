import { PastTrainingComponent } from './../../training/past-training/past-training.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onstart() {
    this.router.navigate(['/training']);
  }

  readplank() {
    this.router.navigate(['/mobiledemoplank']);
  }
  readhalasana() {
    this.router.navigate(['/mobiledemphalasana'])
  }


  readchair()
  {
    this.router.navigate(['/mobiledemochair']);
  }
  readwheel()
  {
    this.router.navigate(['/mobiledemopwheel']);
  }

}
