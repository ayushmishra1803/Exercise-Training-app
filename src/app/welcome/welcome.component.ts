import { WalkComponent } from './../cards/walk/walk.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }
  Start()
  {
    this.router.navigate(['/training']);
  }
  walk()
  {
    this.router.navigate(['/walk']);
  }
  yoga()
  {
    this.router.navigate(['/yoga']);
  }

  ngOnInit(): void {
  }

}
