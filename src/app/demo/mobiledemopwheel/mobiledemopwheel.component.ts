import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledemopwheel',
  templateUrl: './mobiledemopwheel.component.html',
  styleUrls: ['./mobiledemopwheel.component.scss']
})
export class MobiledemopwheelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onstart()
  {
    this.router.navigate(['/training']);
  }

}
