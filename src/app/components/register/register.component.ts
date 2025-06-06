import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;
  constructor() { }
  formRegister = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router)

  registerForm = this.formRegister.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });


  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
      }
      console.log('Form submitted:', formData);
      // Gửi dữ liệu đến API backend tại đây
      this.authService.register(formData.name!, formData.email!, formData.password!).subscribe(result => {
        alert("User registered");
      })
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  goToLogin() {
    this.router.navigateByUrl("/login");
  }
}
