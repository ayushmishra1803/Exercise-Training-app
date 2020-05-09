import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledemphalasana',
  templateUrl: './mobiledemphalasana.component.html',
  styleUrls: ['./mobiledemphalasana.component.scss']
})
export class MobiledemphalasanaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onstart() {
    this.router.navigate(['/training'])
  }

}
