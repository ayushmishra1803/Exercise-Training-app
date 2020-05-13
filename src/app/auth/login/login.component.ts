import { TrainingServiceService } from './../../services/TrainingService/training-service.service';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared/shared.service';
import { AuthService } from './../../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isloading = false;
  private loadingsub: Subscription;

  constructor(
    private service: AuthService,
    private shared: SharedService,
    private training: TrainingServiceService
  ) {}

  ngOnDestroy(): void {
    this.loadingsub.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingsub = this.shared.loadingStatechanged.subscribe((isload) => {
      this.isloading = isload;
    });
  }

  onsubmit(f: NgForm) {
    this.service.login({
      email: f.value.email,
      password: f.value.password,
    });
  }

  facebook() {
    this.service.facebooklogin();
  }

  gamil(){
    this.service.gmaillogin();
  }
}
