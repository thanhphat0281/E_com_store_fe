import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  constructor() { }
  formLogin = inject(FormBuilder);
  authService = inject(AuthService);

  router = inject(Router)

  loginForm = this.formLogin.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  login() {
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe((result: any) => {
      console.log(result);
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      // if(result.user.isAdmin){
      //   this.router.navigateByUrl("/admin");
      // }else {
      //    this.router.navigateByUrl("/");
      // }
     this.router.navigateByUrl("/");
    })
  }
  goToRegister() {
    this.router.navigateByUrl("/register");
  }
}
