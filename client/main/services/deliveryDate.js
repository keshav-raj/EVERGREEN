import { Meteor } from 'meteor/meteor';

angular.module("milkyWay")
    .service('DeliveryDateService', function () {
     var Dates = {
        fromDate: '',
        toDate: ''
    };
    return Dates;
});
