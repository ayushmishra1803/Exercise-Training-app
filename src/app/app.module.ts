import { SharedService } from './services/shared/shared.service';


import { environment } from '../environments/environment';
import { TrainingServiceService } from './services/TrainingService/training-service.service';
import { AuthService } from './services/auth/auth.service';
import { MaterialmodulesModule } from './modules/materialmodules/materialmodules/materialmodules.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { HeaderComponent } from './navigate/header/header.component';
import { SidenavComponent } from './navigate/sidenav/sidenav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { TrainingstopComponent } from './dialog/trainingstop/trainingstop.component';
import { AngularFireModule } from '@angular/fire';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { YogaComponent } from './cards/yoga/yoga.component';
import { WalkComponent } from './cards/walk/walk.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DemoComponent } from './demo/demo/demo.component';
import { MobiledemoComponent } from './demo/mobiledemo/mobiledemo.component';
import { MobiledemoplankComponent } from './demo/mobiledemoplank/mobiledemoplank.component';
import { MobiledemopwheelComponent } from './demo/mobiledemopwheel/mobiledemopwheel.component';
import { MobiledemochairComponent } from './demo/mobiledemochair/mobiledemochair.component';
import { MobiledemphalasanaComponent } from './demo/mobiledemphalasana/mobiledemphalasana.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    HeaderComponent,
    SidenavComponent,
    WelcomeComponent,
    TrainingstopComponent,
    FooterComponent,
    YogaComponent,
    WalkComponent,
    FeedbackComponent,
    DemoComponent,
    MobiledemoComponent,
    MobiledemoplankComponent,
    MobiledemopwheelComponent,
    MobiledemochairComponent,
    MobiledemphalasanaComponent,
    ForgetpasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmodulesModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
   
  ],
  providers: [AuthService,TrainingServiceService,SharedService],
  bootstrap: [AppComponent],
  entryComponents:[TrainingstopComponent]
})
export class AppModule { }
