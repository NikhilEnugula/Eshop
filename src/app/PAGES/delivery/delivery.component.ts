import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  addressForm = this.fb.group({
    username: ['', Validators.required],
    mobile: ['', Validators.required],
    pincode: ['', Validators.required],
    flatno: ['', Validators.required],
    village: ['', Validators.required],
    landmark: ['', Validators.required],
    town: ['', Validators.required],
    State: ['', Validators.required],
  });
}
