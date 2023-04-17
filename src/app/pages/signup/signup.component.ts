
import { Component, OnInit } from '@angular/core';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  errorMsg: string | undefined;
  loader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userId: [doc(collection(this.firestore, "users")).id],
      name: ["", [ Validators.required ]],
      email: ["", [ Validators.required, Validators.email ]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  async registerUser(form: any){
    // let formValues = { ...form.value };
    delete this.errorMsg;
    this.loader = true;
    let formValues: {  name: string; email: string; password: string } = Object.assign({}, form.value);
    this.authService.registerUser(formValues)
      .then(() => this.loader = false)
      .catch((error) => {
        this.loader = false;
        this.errorMsg = error;
        setTimeout(() => delete this.errorMsg, 5000)
      });
  }

}