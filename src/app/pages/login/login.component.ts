
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMsg: string | undefined;
  loader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [ Validators.required, Validators.email ]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser(form: FormGroup): void {
    // let formValues = { ...form.value };
    delete this.errorMsg;
    this.loader = true;
    let formValues: { email: string; password: string } = { ...form.value };
    
    this.authService.loginUser(formValues)
      .then(() => this.loader = false)
      .catch((error) => {
        this.loader = false;
        this.errorMsg = error;
        setTimeout(() => delete this.errorMsg, 5000)
      });
  }

  
}