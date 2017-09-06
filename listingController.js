angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.show = false;
    $scope.form = {};

    $scope.addListing = function() {
      // console.log("Button is working");
      $scope.listings.push($scope.form);
      $scope.form = {}
      $scope.show = !$scope.show;
    };
    $scope.deleteListing = function(listing) {
      let newListings = [];
        newListings = $scope.listings.filter(function (selection) {
          let clearName = listing.name;
          let clearCode = listing.code;
          if ( selection.name !== clearName && selection.code !== clearCode) {
            return listing;
          }
        });
        $scope.listings = newListings;
        $scope.detailedInfo = undefined;
      // console.log("Button is working");
    };
    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
      // console.log("Click is working");
    };
    $scope.onClick = function() {
      $scope.show = !$scope.show;
    };
  }
]);
