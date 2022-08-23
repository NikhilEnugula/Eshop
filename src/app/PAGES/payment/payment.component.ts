import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor() {}
  public pod_option: boolean = false;
  public uip_option: boolean = false;

  ngOnInit(): void {}
  pod() {
    this.pod_option = true;
    this.uip_option = false;
  }
  ccdc() {
    this.uip_option = true;
    this.pod_option = false;
  }
  upi() {
    this.pod_option = false;
    this.uip_option = false;
  }
}
