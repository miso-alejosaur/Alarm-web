import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmsListComponent } from './alarms-list/alarms-list/alarms-list.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'recover', component: RecoverPasswordComponent},
  { path: 'alarms', component: AlarmsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
