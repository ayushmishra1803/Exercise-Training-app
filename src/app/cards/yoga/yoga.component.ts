import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent implements OnInit {

  constructor(private router:Router) { }

  starttraining()
  {
    this.router.navigate(['/training']);
  }
  ngOnInit(): void {
  }

}
