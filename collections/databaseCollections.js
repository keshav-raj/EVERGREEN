import { Mongo } from 'meteor/mongo';

Customers = new Meteor.Collection('Customers');
Price = new Meteor.Collection('Price');
Deliveries = new Meteor.Collection('Deliveries');
Quantities = new Meteor.Collection('Quantities');

Customers.deny({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
});

Price.deny({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
});

Deliveries.deny({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
});

Quantities.deny({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
});
