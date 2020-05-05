

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmodulesModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
   
  ],
  providers: [AuthService,TrainingServiceService],
  bootstrap: [AppComponent],
  entryComponents:[TrainingstopComponent]
})
export class AppModule { }
