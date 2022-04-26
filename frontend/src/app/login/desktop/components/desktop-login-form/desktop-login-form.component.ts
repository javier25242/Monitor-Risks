import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login-desktop-login-form',
  templateUrl: './desktop-login-form.component.html',
  styleUrls: ['./desktop-login-form.component.scss']
})
export class DesktopLoginFormComponent implements OnInit {

  public sesionForm: FormGroup;

  isLoading = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.sesionForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  ngOnInit(): void {}

  get sesionFormControls() {
    return this.sesionForm.controls;
  }

  get email() {
    return this.sesionForm.get('email')?.value;
  }

  get password() {
    return this.sesionForm.get('password')?.value;
  }

  public emailContains(): boolean {
    if (this.sesionForm.get('email')?.touched) return true;
    if (this.email.length === 0) return false;
    if (this.email.includes('@')) {
      return false;
    } else return true;
  }

  public async login() {

    //agregar lógica
  }

  toggleLoading() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 4000)
  }
}
