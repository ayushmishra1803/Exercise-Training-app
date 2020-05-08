import { FeedbackComponent } from './feedback/feedback.component';
import { WalkComponent } from './cards/walk/walk.component';
import { YogaComponent } from './cards/yoga/yoga.component';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'training',component:TrainingComponent,canActivate:[AuthGuard]},
  {path:'yoga',component:YogaComponent},
  {path:'walk',component:WalkComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard],

})
export class AppRoutingModule { }
