import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  userForm = this.fb.group({
    userEmail: ['', Validators.required],
    userPassword: ['', Validators.required],
  });
  submitData() {}
}
