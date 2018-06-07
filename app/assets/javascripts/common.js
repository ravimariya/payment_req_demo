PaymentRequestDemo = {};

PaymentRequestDemo.Common = {
  supportedPaymentMethods: function(methods='basic-card'){   
    return [{supportedMethods: methods}];
  },
  paymentDetails: function(label='Total', currency='USD', value=0){
    return {total: {label: label, amount: {currency: currency, value: value}}};
  },
  requestPayment: function(methods, label, currency, value, options){
    supportedPaymentMethods = this.supportedPaymentMethods(methods);
    paymentDetails = this.paymentDetails(label, currency, value);
    return new PaymentRequest(supportedPaymentMethods, paymentDetails, options);
  }
}