  import { Meteor } from 'meteor/meteor';

  Meteor.methods({

  newCustomer: function(customerDetails){
    return Customers.insert(customerDetails);
  },
  addPrice: function(data){
    console.log(data,data.value);
    return Price.update({'priceAvailable':true},{ $set: {'value':data.value}},{ upsert: true });
  },
  addQuantity: function(data){
    return Quantities.insert(data);
  },
  deleteQuantity: function(itemToDelete){
    return Quantities.remove({'_id':itemToDelete});
  },
  deliverItem: function(data){
    return Deliveries.insert(data);
  },
  UpdateCustomer: function(data){
    console.log(data,data.value);
    return Customers.update({'_id':data.customerId},{ $set: {'name':data.name, 'phoneNo' :data.number}});
  },
  deleteCustomer: function(data){
    return Customers.remove({'_id':data.customerId});
  },

});
