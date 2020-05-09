import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledemochair',
  templateUrl: './mobiledemochair.component.html',
  styleUrls: ['./mobiledemochair.component.scss']
})
export class MobiledemochairComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onstart()
  {
    this.router.navigate(['/training']);
  }

}
