import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(PMId) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deletePaymentDetail(PMId)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err) })
    }
  }

}
