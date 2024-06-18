import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user/user';
import { AuthentificationService } from '../../service/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  user?:User;
  router=inject(Router)

  authetificationService=inject(AuthentificationService)

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      pseudo: ['', [Validators.required]],
      emailAdress: ['', [Validators.required, Validators.email]],
      confirmationMail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
    console.log("ici")
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      this.user=new User(
        this.registerForm.value.pseudo ,
        this.registerForm.value.lastName,
        this.registerForm.value.name,
        this.registerForm.value.password,
        this.registerForm.value.emailAdress,
        this.registerForm.value.birthDate,
      )
      console.log("la")
      this.authetificationService.register(this.user).subscribe()
      this.router.navigateByUrl('/')

    } else {
      console.log('Form is invalid');
    }
  }
}
