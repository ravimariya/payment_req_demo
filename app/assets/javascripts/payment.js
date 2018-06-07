PaymentRequestDemo.Payment = {
  checkout: function(selector){
    $(selector).on('click', function(){
      if(window.PaymentRequest){
        var payment_options = {requestPayerEmail: true, requestPayerName: true}
        var payment_request = PaymentRequestDemo.Common.requestPayment('basic-card', 'Total', 'INR', 10, payment_options)
        payment_request.show().then(function(result){
          $.ajax({
            url: '/pay',
            method: 'POST',
            success: function(response){
              if(response == 200){
                return result.complete('success');
              }
              else{
                return result.complete('fail');
              }
            }
          });
          return result.complete().then(function(){
            alert('Hi '+result.payerName+' you have successfully paid Rs.'+10+' with your card')
          });
        }).catch(function(err){
          console.log(err);
        });
      }
      else{
        alert("Browser doesn't support payment request api");
      }
    })
  },
  documentOnReady: function(){
    this.checkout('#checkout');
  }
},
$(document).ready(function(){
  PaymentRequestDemo.Payment.documentOnReady();
});
$(document).on('page:load', function(){
  PaymentRequestDemo.Payment.pageLoad();
});