import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  register: any;
  ngOnInit(): void {
    // this.register = new FormGroup({
    //   Name: new FormControl(null),
    //   obile: new FormControl(null),
    //   Email: new FormControl(null),
    //   Password: new FormControl(null),
    // });
  }
  submitData() {
    console.log(this.register.value);
  }
}
