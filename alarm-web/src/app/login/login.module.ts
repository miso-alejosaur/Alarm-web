import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginFormComponent,
    RecoverPasswordComponent
  ],
  exports: [
    LoginFormComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ]
})
export class LoginModule { }
