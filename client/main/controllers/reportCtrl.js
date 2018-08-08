angular.module("milkyWay")
    .controller('reportCtrl', function($scope,$rootScope,$state,$stateParams,$meteor,$mdSidenav,$window,DeliveryDateService) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      $scope.Dates = DeliveryDateService;
      function formatDate(Dates){
      let fromDate = Dates.fromDate;
      fromDate.setHours(00,00,00,00);
      let toDate = Dates.toDate;
      toDate.setHours(23,59,59,00);

      this.dates = {
        fromDate:fromDate,
        toDate:toDate
      };

      return dates
      };

      var formatedDates = formatDate($scope.Dates);

      console.log(formatedDates);

      $scope.helpers({
        Deliveries: function(){

        return Deliveries.find({deliveryDate:{
                  '$gte': new Date(formatedDates.fromDate),
                  '$lt': new Date(formatedDates.toDate)}});

      }
    });

    function download_csv (csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = $window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

    		csv.push(row.join(","));
    	}

        // Download CSV
        download_csv(csv.join("\n"), filename);
    }

    $scope.downloadReport = function(){
      let filename = 'report'+new Date().toDateString();

      var html = document.querySelector("table").outerHTML;
      export_table_to_csv(html, filename+'.csv');

    };


});
