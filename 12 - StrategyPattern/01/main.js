const Payment = require('./Payment');

const payment = new Payment();
payment.showPaymentMethod('Mike');
payment.showPaymentMethod('Paul');

payment.changeStrategy('Paypal');
