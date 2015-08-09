<!doctype html>
<html>
    <head>
        <title>Patient Form</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="JDOSES-patientform">
        <meta name="author" content="David Samuel">
        <base href="/form">
        <link rel="icon" href="/favicon.png">
        
        <!--<link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/sb-admin.css">
        <link rel="stylesheet" href="/css/employee_login.css">-->
        <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="/bower_components/angular-loading-bar/src/loading-bar.css">
        <link rel="stylesheet" href="/bower_components/angular-ui-notification/dist/angular-ui-notification.min.css">
        <link rel="stylesheet" href="/bower_components/angular-chart.js/dist/angular-chart.css">
    </head>
    <body ng-app="form">
        <!--<nav class="navbar navbar-default navbar-fixed-top" ng-controller="NavigationBarController" ng-show="navBar" ng-cloak>
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle btn navbar-btn" ng-init="navCollapsed = true"
                            ng-click="navCollapsed = !navCollapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="">{{'TITLE'|translate}}</a>
                </div>
                <div collapse="navCollapsed" class="navbar-collapse collapse navbar-responsive-collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <div class="btn-default navbar-btn" dropdown is-open="status.isopen">
                              <button id="single-button" type="button" class="btn btn-primary" dropdown-toggle ng-disabled="disabled">
                                {{selectedLocationText}} <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu" role="menu" aria-labelledby="single-button">
                                <li ng-repeat="location in locations" role="menuitem"><a href="" ng-click="selectLocation(location)">{{location.name}}</a></li>
                              </ul>
                            </div>
                        </li>
                        <li><a href="" ng-click="gotoDashboard()">{{'MENU_DASHBOARD' | translate}}</a></li>
                        <li><a href="" ng-click="gotoEmployee()">{{'MENU_EMPLOYEE' | translate}}</a></li>
                        <li><a href="" ng-click="gotoGate()">{{'MENU_GATE' | translate}}</a></li>
                        <li><a href="" ng-click="gotoTransaction()">{{'MENU_TRANSACTION' | translate}}</a></li>
                        <li><a href="" ng-click="gotoProblem()">{{'MENU_PROBLEM' | translate}}</a></li>
                        <li><a href="" ng-click="gotoMember()">{{'MENU_MEMBERS' | translate}}</a></li>
                        <li><a href="" ng-click="gotoHelp()">{{'MENU_HELP' | translate}}</a></li>

                    </ul>

                    <div class="navbar-collapse collapse navbar-responsive-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li dropdown>
                                <a href=""  dropdown-toggle ng-click="open()">Admin<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="" ng-click="gotoLocationSettings()">Location settings</a></li>
                                    <li><a href="" ng-click="logoutAdmin()">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>-->
        
        <div class="container">
            <div ng-view>
                <!--Where the content begin-->
            </div>
        </div>

    <div id="footer">
      <div class="container">
        <p align="center">JDOSES - <i>Jakarta Diseases Observation System & Endemic Surveillance</i> &copy; Mark Industries 2015</p>
      </div>
    </div>
    </body>
    <!-- Application Dependencies -->
    <!--<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>-->
    <script type="text/javascript" src="/bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script type="text/javascript" src="/bower_components/angular-animate/angular-animate.js"></script>
    <script type="text/javascript" src="/bower_components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript" src="/bower_components/angular-route/angular-route.js"></script>
    <script type="text/javascript" src="/bower_components/angular-loading-bar/src/loading-bar.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui-notification/dist/angular-ui-notification.min.js"></script>
    <script type="text/javascript" src="/bower_components/moment/moment.js"></script>
    <script type="text/javascript" src="/bower_components/moment/locale/id.js"></script>
    <!--<script type="text/javascript" src="/bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-translate/angular-translate.min.js"></script>
    <script type="text/javascript" src="/bower_components/ng-file-upload/ng-file-upload.min.js"></script>
    
    
    <script type="text/javascript" src="/bower_components/lodash/dist/lodash.min.js"></script>
    <script type="text/javascript" src="/bower_components/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min.js"></script>
    <script type="text/javascript" src="/scripts/config/Chart.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-chart.js/dist/angular-chart.min.js"></script>--->

    <!-- Application Scripts -->
    <script type="text/javascript" src="/scripts/form.js"></script>
    <script type="text/javascript" src="/scripts/controllers/PatientFormController.js"></script>

    <script type="text/javascript" src="/scripts/services/modal.js"></script>
    <script type="text/javascript" src="/scripts/services/patient.js"></script>
    <!--<script type="text/javascript" src="/scripts/controllers/admin/EmployeesController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/EmployeeDetailController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/GatesController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/GateDetailController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/MembersController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/TransactionsController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/TransactionDetailController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/NavigationBarController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/DashboardController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/MemberDetailController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/ProblemController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/HelpController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/AdminLoginController.js"></script>
    <script type="text/javascript" src="/scripts/controllers/admin/FooterController.js"></script>

    <script type="text/javascript" src="/scripts/controllers/employee/Employee_Login_Controller.js"></script>
    <script type="text/javascript" src="/scripts/controllers/ImageViewer.js"></script>-->


    <!--<script type="text/javascript" src="/scripts/services/employee.js"></script>
    <script type="text/javascript" src="/scripts/services/gate.js"></script>
    <script type="text/javascript" src="/scripts/services/member.js"></script>
    <script type="text/javascript" src="/scripts/services/absence.js"></script>
    <script type="text/javascript" src="/scripts/services/transaction.js"></script>
    <script type="text/javascript" src="/scripts/services/employeeLogin.js"></script>
    <script type="text/javascript" src="/scripts/services/modal.js"></script>
    <script type="text/javascript" src="/scripts/services/cashier.js"></script>
    <script type="text/javascript" src="/scripts/services/config.js"></script>
    <script type="text/javascript" src="/scripts/services/utility.js"></script>
    <script type="text/javascript" src="/scripts/services/problem.js"></script>
    <script type="text/javascript" src="/scripts/services/help.js"></script>
    <script type="text/javascript" src="/scripts/services/location.js"></script>
    <script type="text/javascript" src="/scripts/services/adminLogin.js"></script>

    <script type="text/javascript" src="/scripts/config/translateProvider.js"></script>-->


</html>