import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor() {}
  public pod_option: boolean = false;
  public card_option: boolean = false;
  public upi_option: boolean = false;
  public card_otp: boolean = false;
  public upi_otp: boolean = false;

  ngOnInit(): void {}
  pod() {
    this.pod_option = true;
    this.card_option = false;
    this.upi_option = false;
    this.card_otp = false;
    this.upi_otp = false;
  }
  ccdc() {
    this.card_option = true;
    this.upi_option = false;
    this.pod_option = false;
    this.card_otp = false;
    this.upi_otp = false;
  }
  upi() {
    this.pod_option = false;
    this.upi_option = true;
    this.card_option = false;
    this.upi_otp = false;
    this.card_otp = false;
  }
  cardOtp() {
    this.card_otp = true;
    this.card_option = false;
    this.upi_otp = false;
  }
  upiOtp() {
    this.upi_otp = true;
    this.upi_option = false;
    this.card_otp = false;
  }
}
