/* scripts/app.js */
(function () {

    'use strict';

    angular
        .module('form', [
            'ngResource',
            'ui.bootstrap',
            'ngAnimate',
            'ngRoute',
            'PatientFormCtrl',
            'ModalSrvc',
            'PatientSrvc',
            'ui-notification',
            'angular-loading-bar'
        ])

        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/form', {
                    templateUrl: '/template/patientform.html',
                    controller: 'PatientFormController',
                    })
                .otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode(true);
        })

        .directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };

    }]);

})();

