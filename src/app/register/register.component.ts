import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from "../auth.service";
import {MatSnackBar} from "@angular/material";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'register-root',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {
  registerData :any;

  constructor(public authService: AuthService, public snackBar: MatSnackBar) {
  }

  openSnackBar() {
    this.snackBar.open('Message archived');
  }
  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }

  send() {}


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  isValidForm () {
    return !(this.emailFormControl.hasError('required')
      || this.passwordFormControl.hasError('required')
      || this.nameFormControl.hasError('required')
      || this.rolesFormControl.hasError('required')
      || this.emailFormControl.hasError('email')
      || this.passwordFormControl.hasError('minLength'));
  };

  rolesFormControl = new FormControl('', [
    Validators.required
  ]);

  rolesList = ['Programmer', 'Artist', 'Game developer', 'Musician'];

  matcher = new MyErrorStateMatcher();
}



