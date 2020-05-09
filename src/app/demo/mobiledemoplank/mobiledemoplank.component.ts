import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledemoplank',
  templateUrl: './mobiledemoplank.component.html',
  styleUrls: ['./mobiledemoplank.component.scss']
})
export class MobiledemoplankComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  start()
  {
    this.router.navigate(['/training'])
  }

}
