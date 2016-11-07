/**
 * Created by rajendrak on 11/5/2016.
 */
(function(){
    'use strict'
    angular.module("LunchCount",[]).controller("lunchCountController",lunchCountController);
    lunchCountController.$inject=['$scope'];
    function lunchCountController($scope){
        $scope.lunchItems="";
        $scope.message="";
        $scope.checkIfTooMuch=function(){
            var splitItems=$scope.lunchItems.split(',');
            var filterItem=splitItems.filter(filterEmptyItems);
            console.log(filterItem);
            if(filterItem.length >=3){
                $scope.message="Too much!";
            }else{
                $scope.message="Enjoy";
            }
        }
    }
    function filterEmptyItems(lunchItem){
        return lunchItem.trim()!=='';
    }

})();

