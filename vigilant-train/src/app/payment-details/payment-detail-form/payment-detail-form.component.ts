import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();

    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    },
    err => {
      console.log(err);
    })
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(res => {
      this.resetForm(form);
      this.toastr.info('Submitted successfully', 'Payment Detail Register');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    })
  }
}
