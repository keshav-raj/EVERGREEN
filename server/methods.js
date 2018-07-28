  import { Meteor } from 'meteor/meteor';

  Meteor.methods({

  newCustomer: function(customerDetails){
    return Customers.insert(customerDetails);
  },
  newDelivery: function(data){
    return Deliveries.insert(data);
  },
  addPrice: function(price){
    return Price.insert(price);
  },
  addQuantity: function(data){
    return Quantities.insert(data);
  },
  deleteQuantity: function(itemToDelete){
    return Quantities.remove({'_id':itemToDelete});
  },

});
