/* scripts/app.js */
(function () {

    'use strict';

    angular
        .module('form', [
            'ngResource',
            'ui.bootstrap',
            'ngAnimate',
            'ngRoute',
            'PatientFormCtrl'
            /*'angularjs-dropdown-multiselect',
            'angular-loading-bar',
            'ui-notification',
            'pascalprecht.translate',
            'EmployeeCtrl',
            'EmployeeSrvc',
            'EmployeeDetailCtrl',
            'NavigationBarCtrl',
            'ModalSrvc',
            'EmployeeLoginSrvc',
            'LocalStorageModule',
            'TranslateProv',
            'GateCtrl',
            'GateSrvc',
            'GateDetailCtrl',
            'MemberCtrl',
            'MemberDetailCtrl',
            'MemberSrvc',
            'TransactionCtrl',
            'TransactionSrvc',
            'TransactionDetailCtrl',
            'AbsenceSrvc',
            'DashboardCtrl',
            'UtilitySrvc',
            'ProblemCtrl',
            'ProblemSrvc',
            'HelpCtrl',
            'HelpSrvc',
            'ngFileUpload',
            'ImageViewer',
            'LocationSrvc',
            'chart.js',
            'AdminLoginCtrl',
            'AdminLoginSrvc',
            'FooterCtrl'*/
        ])

        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/form', {
                    templateUrl: '/template/patientform.html',
                    controller: 'PatientFormController',
                    })
                /*.when('/employee', {
                    templateUrl: '/template/admin/employee.html',
                    controller: 'EmployeesController',
                    })*/
                .otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode(true);
        })

        /*.directive("passwordVerify", function() {
           return {
              require: "ngModel",
              scope: {
                passwordVerify: '='
              },
              link: function(scope, element, attrs, ctrl) {
                scope.$watch(function() {
                    var combined;

                    if (scope.passwordVerify || ctrl.$viewValue) {
                       combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function(value) {
                    if (value) {
                        ctrl.$parsers.unshift(function(viewValue) {
                            var origin = scope.passwordVerify;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("passwordVerify", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("passwordVerify", true);
                                return viewValue;
                            }
                        });
                    }
                });
             }
           };
        })*/


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

