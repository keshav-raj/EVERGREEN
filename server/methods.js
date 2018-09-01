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

checkUser: function(email, username){
  check(email, String);
  check(username, String);
  let emailCheck = Accounts.findUserByEmail(email);
  let usernameCheck = Accounts.findUserByUsername(username);

  if (emailCheck) {
    throw new Meteor.Error('Email Exists');
  }
  else if (usernameCheck){
    throw new Meteor.Error('Username Exists');
  }
  else {
   return true;
  }
},

//Check if username exists.
checkName: function(user) {
  check(user, String);
  if (
    //Profile.find({ profID: { $ne: this.userId }, profName: user }).count() != 0 &&
    Meteor.users.find({ _id: { $ne: this.userId }, username: user }).count() != 0
  ) {
    return false;
  }
  else {
    return true;
  }
}


});
