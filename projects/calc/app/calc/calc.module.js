(function () {
    'use strict';

    angular.module('app.calc', []);
    
    angular.module('app.calc').filter('arrayText',function(){
        return function(input){
            return input.join('');
        }
    });
})();