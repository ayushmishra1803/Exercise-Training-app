import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.scss']
})
export class WalkComponent implements OnInit {

  constructor(private router:Router) { }

  start()
  {
    this.router.navigate(['/training']);
  }
  ngOnInit(): void {
  }

}
