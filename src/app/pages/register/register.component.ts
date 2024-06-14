import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      pseudo: ['', [Validators.required]],
      emailAdress: ['', [Validators.required, Validators.email]],
      confirmationMail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmationMotDePasse: ['', [Validators.required]]
    }, { validators: this.emailMatchValidator });
  }

  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (!/[A-Z]/.test(value) || !/[0-9]/.test(value) || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return { 'weakPassword': true };
    }
    return null;
  }

  emailMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    if (group.get('emailAdress')?.value !== group.get('confirmationMail')?.value) {
      return { 'emailMismatch': true };
    }
    if (group.get('password')?.value !== group.get('confirmationMotDePasse')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
