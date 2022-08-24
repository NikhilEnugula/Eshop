import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}
  LoginForm: any;

  ngOnInit(): void {
    // this.CreateForm();
  }
  // CreateForm() {
  //   this.LoginForm = this.fb.group({
  //     email: [''],
  //     password: [''],
  //   });
  // }
  // SignIn() {
  //   console.log(
  //     'values',
  //     this.LoginForm.value.email,
  //     'password',
  //     this.LoginForm.value.password
  //   );
  // }
  CreateAccount() {}
}
