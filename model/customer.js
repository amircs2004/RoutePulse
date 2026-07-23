const mongoose = require("mongoose");
const User = require("./user");

const customerSchema = new mongsooge.Schema({
  //
  deliveryAddresses: [{ type: String }],
  paymentMethods: [{ type: String }],
});

const Custemor = User.discriminator("Customer", customerSchema);
module.exports = Customer;
