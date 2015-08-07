(function() {
    'use strict';

    var employ = angular.module('PatientFormCtrl',[
    ]);
 
    employ.controller('PatientFormController',function($scope,
                                                            $window,
                                                            $modal,
                                                            $routeParams,
                                                            $location
                                                            /*$translate
                                                            localStorageService,
                                                            Notification,
                                                            adminLogin,
                                                            modalService,
                                                            location*/){
        //initialization
        init();
        function init(){
            $scope.patient = [];
            $scope.patient.city = "Jakarta Barat";
            
            $scope.cities = ["Jakarta Barat",
                                "Jakarta Pusat",
                                "Jakarta Selatan",
                                "Jakarta Timur",
                                "Jakarta Utara",
                                "Kepulauan Seribu"
                            ];

            $scope.diseases = ["Malaria",
                                "Gastro Enteritis",
                                "Kholera/Cholera",
                                "Kusta/Leprosy",
                                "TBC/Tuberculosis",
                                "Demam Berdarah DHF",
                                "Radang Tenggorokan Dipteria"
                            ];

            $scope.$watch( 'patient.city',
                function(newValue, oldValue){
                    console.log("change city");
                    switch ($scope.patient.city){
                        case "Jakarta Barat":
                            $scope.districts = [ "Cengkareng",
                                                    "Grogol",
                                                    "Kalideres",
                                                    "Kebon Jeruk",
                                                    "Kembangan",
                                                    "Palmerah",
                                                    "Taman Sari",
                                                    "Tambora"
                                                ];
                            break;
                        case "Jakarta Pusat":
                            $scope.districts = [ "Cempaka Putih",
                                                    "Gambir",
                                                    "Johar Baru",
                                                    "Kemayoran",
                                                    "Menteng",
                                                    "Sawah Besar",
                                                    "Senen",
                                                    "Tanah Abang"
                                                ];
                            break;
                        case "Jakarta Selatan":
                            $scope.districts = [ "Cilandak",
                                                    "Jagakarsa",
                                                    "Kebayoran Baru",
                                                    "Kebayoran Lama",
                                                    "Mampang Prapatan",
                                                    "Pancoran",
                                                    "Pasar Minggu",
                                                    "Pesanggrahan",
                                                    "Setiabudi",
                                                    "Tebet"
                                                ];
                            break;
                        case "Jakarta Timur":
                            $scope.districts = [ "Cakung",
                                                    "Cipayung",
                                                    "Ciracas",
                                                    "Duren Sawit",
                                                    "Jatinegara",
                                                    "Kramat Jati",
                                                    "Makassar",
                                                    "Matraman",
                                                    "Pasar Rebo",
                                                    "Pulo Gadung"
                                                ];
                            break;
                        case "Jakarta Utara":
                            $scope.districts = [ "Cilincing",
                                                    "Kelapa Gading",
                                                    "Koja",
                                                    "Pademangan",
                                                    "Penjaringan",
                                                    "Tanjung Priok"
                                                ];
                            break;
                        case "Kepulauan Seribu":
                            $scope.districts = [ "Kepulauan Seribu Selatan",
                                                    "Kepulauan Seribu Utara",
                                                    "Pulau Pramuka"
                                                ];
                            break;

                    }
                }
            );

            $scope.$watch( 'patient.district',
                function(newValue, oldValue){
                    console.log("change district");
                    switch ($scope.patient.district){
                        case "Cengkareng":
                            $scope.postalcode = [ "11710", "11720", "11730", "11740", "11750"];
                            break;
                        case "Grogol":
                            $scope.postalcode = [ "11440", "11450", "11460", "11470"];
                            break;
                        case "Kalideres":
                            $scope.postalcode = [ "11810", "11820", "11830", "11840", "11850"];
                            break;
                        case "Kebon Jeruk":
                            $scope.postalcode = [ "11510", "11520", "11530", "11540", "11550", "11560"];
                            break;
                        case "Kembangan":
                            $scope.postalcode = [ "11610", "11620", "11630", "11640", "11650"];
                            break;
                        case "Palmerah":
                            $scope.postalcode = [ "11410", "11420", "11430", "11480"];
                            break;
                        case "Taman Sari":
                            $scope.postalcode = [ "11110", "11120", "11130", "11140", "11150","11160", "11170", "11180"];
                            break;
                        case "Tambora":
                            $scope.postalcode = [ "11210", "11220", "11230", "11240", "11250","11260", "11270", "11310", "11320", "11330"];
                            break;
                        case "Cempaka Putih":
                            $scope.postalcode = [ "10510", "10520", "10570"];
                            break;
                        case "Gambir":
                            $scope.postalcode = [ "10110", "10120", "10130", "10140", "10150", "10160"];
                            break;
                        case "Johar Baru":
                            $scope.postalcode = [ "10530", "10540", "10550", "10560"];
                            break;
                        case "Kemayoran":
                            $scope.postalcode = [ "10610", "10620", "10630", "10640", "10650"];
                            break;
                        case "Menteng":
                            $scope.postalcode = [ "10310", "10320", "10330", "10340", "10350"];
                            break;
                        case "Sawah Besar":
                            $scope.postalcode = [ "10710", "10720", "10730", "10740", "10750"];
                            break;
                        case "Senen":
                            $scope.postalcode = [ "10410", "10420", "10430", "10440", "10450", "10460"];
                            break;
                        case "Tanah Abang":
                            $scope.postalcode = [ "10210", "10220", "10230", "10240", "10250", "10260", "10270"];
                            break;
                        case "Menteng":
                            $scope.postalcode = [ "10310", "10320", "10330", "10340", "10350"];
                            break;
                        case "Cilandak":
                            $scope.postalcode = [ "12410", "12420", "12430", "12440", "12450"];
                            break;
                        case "Jagakarsa":
                            $scope.postalcode = [ "12530", "12620", "12630", "12640"];
                            break;
                        case "Kebayoran Baru":
                            $scope.postalcode = [ "12110", "12120", "12130", "12140", "12150", "12160", "12170", "12180", "12190"];
                            break;
                        case "Kebayoran Lama":
                            $scope.postalcode = [ "12210", "12220", "12230", "12240", "12310"];
                            break;
                        case "Mampang Prapatan":
                            $scope.postalcode = [ "12710", "12720", "12730", "12790"];
                            break;
                        case "Pancoran":
                            $scope.postalcode = [ "12740", "12750", "12760", "12770", "12780"];
                            break;
                        case "Pasar Minggu":
                            $scope.postalcode = [ "12510", "12520", "12540", "12550", "12560"];
                            break;
                        case "Pesanggarahan":
                            $scope.postalcode = [ "12250", "12260", "12270", "12320", "12330"];
                            break;
                        case "Setiabudi":
                            $scope.postalcode = [];
                            break;
                        case "Tebet":
                            $scope.postalcode = [ "12810", "12820", "12830", "12840", "12850", "12860", "12870"];
                            break;
                        case "Cakung":
                            $scope.postalcode = [ "13910", "13920", "13930", "13940", "13950", "13960"];
                            break;
                        case "Cipayung":
                            $scope.postalcode = [ "13810", "13820", "13840", "13850", "13860", "13870", "13880", "13890"];
                            break;
                        case "Ciracas":
                            $scope.postalcode = [ "13720", "13730", "13740", "13750", "13830"];
                            break;
                        case "Duren Sawit":
                            $scope.postalcode = [ "13430", "13440", "13450", "13460", "13470"];
                            break;
                        case "Jatinegara":
                            $scope.postalcode = [ "13310", "13320", "13330", "13340", "13350", "13410", "13420"];
                            break;
                        case "Kramat Jati":
                            $scope.postalcode = [ "13510", "13520", "13530", "13540", "13550", "13630", "13640"];
                            break;
                        case "Makassar":
                            $scope.postalcode = [];
                            break;
                        case "Matraman":
                            $scope.postalcode = [];
                            break;
                        case "Pasar Rebo":
                            $scope.postalcode = [ "13710", "13760", "13770", "13780", "13790"];
                            break;
                        case "Pulo Gadung":
                            $scope.postalcode = [ "13110", "13120", "13130", "13140", "13150"];
                            break;
                        case "Cilincing":
                            $scope.postalcode = [ "14110", "14120", "14130", "14140", "14150"];
                            break;
                        case "Kelapa Gading":
                            $scope.postalcode = [ "14240", "14250"];
                            break;
                        case "Koja":
                            $scope.postalcode = [ "14210", "14230", "14260", "14270"];
                            break;
                        case "Pademangan":
                            $scope.postalcode = [ "14410", "14420", "14430"];
                            break;
                        case "Penjaringan":
                            $scope.postalcode = [ "14440", "14450", "14460", "14470"];
                            break;
                        case "Tanjung Priok":
                            $scope.postalcode = [ "14310", "14320", "14330", "14340", "14350", "14360", "14370"];
                            break;
                        case "Cipayung":
                            $scope.postalcode = [ "13810", "13820", "13840", "13850", "13860", "13870", "13880", "13890"];
                            break;
                        case "Kepulauan Seribu Selatan":
                            $scope.postalcode = [ "14510", "14520"];
                            break;
                        case "Kepulauan Seribu Utara":
                            $scope.postalcode = [ "14530", "14540"];
                            break;
                        case "Pulau Pramuka":
                            $scope.postalcode = [];
                            break;
                        

                    }
                }
            );

            $scope.datepicker = [];
            $scope.datepicker.pickedDate = new Date();
            $scope.datepicker.pickedDateText =  moment($scope.datepicker.pickedDate).locale("id").format('dddd, Do MMMM YYYY');
            $scope.datepicker.maxDate = moment($scope.datepicker.pickedDate);
            $scope.datepicker.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            
        }

        $scope.openDate = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.datepicker.opened = true;
        }

        /*function signin() {
            //check if there is already logged-in user

            adminLogin.login({
                    "email":$scope.user.email,
                    "password":$scope.user.password
                }).then(function(success) {
                    console.log("nih success " +success);
                    if (localStorageService.get("token")) {
                        if(localStorageService.get("user")){
                            console.log(localStorageService.get("user")['code']);
                            //getAllLocations();
                        }
                        $location.path("dashboard");
                    } else{
                        Notification.error({message: $translate.instant(success.info), delay: 3000});
                        $scope.user.password = "";
                    }
                }, function(error) {
                    console.log(error);
                });
        }

        function getAllLocations(){
            location.queryLocation({
                                code_company: localStorageService.get("user")['code']
                                }).then(function(results){
                console.log (results);
                localStorageService.set("locations", results);

            },function(error){
                console.log(error);
            });
        }

         $scope.signinWithLogoutCheckFirst = function() {
            if(localStorageService.get('token')){
               adminLogin.logout().then(function(results){
                    signin();
                },function(error){
                    console.log(error);
                });
            }else{
                signin();
            }
            
        };*/
    });

})();
