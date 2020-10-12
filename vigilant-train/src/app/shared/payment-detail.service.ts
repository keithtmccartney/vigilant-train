import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = new PaymentDetail();
  readonly rootURL = 'https://localhost:65067/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(`${this.rootURL}/PaymentDetail`, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.rootURL}/PaymentDetail/${this.formData.PMId}`, this.formData);
  }

  deletePaymentDetail() {
    return this.http.delete(`${this.rootURL}/PaymentDetail/${this.formData.PMId}`);
  }

  refreshList() {
    this.http.get(`${this.rootURL}/PaymentDetail/`)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
