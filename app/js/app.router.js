'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {
                $urlRouterProvider
                    .otherwise('/access/login');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html',
			            controller : "loginCheck"
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'partials/app_dashboard.html',
                        controller : "loginCheck",
                        
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                         }
                                      )*/
                                    ;
                                }
                            ]
                        }
                    })

                  //  .state('app.searchapp', {
                   //     url: '/searchapp',
                   //     templateUrl: 'partials/searchapp.html',
                   // })
                     .state('app.blo-search', {
                        url: '/blog/search',
                        templateUrl: 'partials/blo-search.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/search-startfrom.js',
                                        'js/controllers/blo-search.js',
                                        'js/directives/ui-searchtabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })

                     .state('app.blo-users', {
                        url: '/blog/users',
                        templateUrl: 'partials/blo-users.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/blo-users.js']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-user-add', {
                        url: '/blog/user-add',
                        templateUrl: 'partials/blo-user-add.html'
                    })
                    .state('app.blo-user-edit', {
                        url: '/blog/user-edit',
                        templateUrl: 'partials/blo-user-edit.html'
                    })

                     .state('app.soc-groups', {
                        url: '/socialmedia/groups',
                        templateUrl: 'partials/soc-groups.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-groups.js']);
                                }
                            ]
                        }
                    })
                    .state('app.soc-group-add', {
                        url: '/socialmedia/group-add',
                        templateUrl: 'partials/soc-group-add.html'
                    })
                    .state('app.soc-group-edit', {
                        url: '/socialmedia/group-edit',
                        templateUrl: 'partials/soc-group-edit.html'
                    })
                    .state('app.soc-group-view', {
                        url: '/socialmedia/group-view',
                        templateUrl: 'partials/soc-group-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                   .state('app.frl-bids', {
                        url: '/freelancing/bids',
                        templateUrl: 'partials/frl-bids.html'
                    })
                    .state('app.frl-bid-add', {
                        url: '/freelancing/bid-add',
                        templateUrl: 'partials/frl-bid-add.html'
                    })
                    .state('app.frl-bid-edit', {
                        url: '/freelancing/bid-edit',
                        templateUrl: 'partials/frl-bid-edit.html'
                    })
                      .state('app.frl-invoices', {
                        url: '/freelancing/invoices',
                        templateUrl: 'partials/frl-invoices.html'
                    })
                    .state('app.frl-invoice-add', {
                        url: '/freelancing/invoice-add',
                        templateUrl: 'partials/frl-invoice-add.html'
                    })
                    .state('app.frl-invoice-edit', {
                        url: '/freelancing/invoice-edit',
                        templateUrl: 'partials/frl-invoice-edit.html'
                    })
                    .state('app.frl-invoice-view', {
                        url: '/freelancing/invoice-view',
                        templateUrl: 'partials/frl-invoice-view.html'
                    })
                    .state('app.uni-courses', {
                        url: '/university/courses',
                        templateUrl: 'partials/uni-courses.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/courses.js']);
                                }
                            ]
                        }
                    })
                    .state('app.uni-course-add', {
                        url: '/university/course-add',
                        templateUrl: 'partials/uni-course-add.html'
                    })
                    .state('app.uni-course-edit', {
                        url: '/university/course-edit',
                        templateUrl: 'partials/uni-course-edit.html'
                    })
                    .state('app.uni-course-info', {
                        url: '/university/course-info',
                        templateUrl: 'partials/uni-course-info.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })

                    .state('app.soc-media', {
                        url: '/socialmedia/media',
                        templateUrl: 'partials/soc-media.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-media.js']);
                                }
                            ]
                        }
                    })
                      .state('app.mus-upload', {
                        url: '/music/upload',
                        templateUrl: 'partials/mus-upload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/mus-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })

                   .state('app.mus-playlists', {
                        url: '/music/playlists',
                        templateUrl: 'partials/mus-playlists.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/playlists.js']);
                                }
                            ]
                        }
                    })
                    .state('app.mus-playlist-add', {
                        url: '/music/playlist-add',
                        templateUrl: 'partials/mus-playlist-add.html'
                    })
                    .state('app.mus-playlist-edit', {
                        url: '/music/playlist-edit',
                        templateUrl: 'partials/mus-playlist-edit.html'
                    })
                    .state('app.mus-playlist-view', {
                        url: '/music/playlist-view',
                        templateUrl: 'partials/mus-playlist-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })



                    .state('app.ui.blogview', {
                        url: '/blog/{blogId:[0-9]{1,4}}',
                        templateUrl: 'partials/ui-blog-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.imagecrop', {
                        url: '/imagecrop',
                        templateUrl: 'partials/ui-imagecrop.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ngImgCrop').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/imagecrop.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                   /* .state('app.ui.faq', {
                        url: '/faq',
                        templateUrl: 'partials/ui-faq.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/faq.js']);
                                }
                            ]
                        }
                    })*/
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        //template: '<div ui-view class=""></div>',
                        templateUrl: 'partials/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css', 'js/controllers/mail.js',
                                        'js/services/mail-service.js',
                                        JQ_CONFIG.moment
                                    ]);
                                }
                            ]
                        }
                    })
.state('app.mus-genres', {
                        url: '/music/displays',
                        templateUrl: 'partials/mus-genres.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/mus-genre-search-startfrom.js',
                                        'js/controllers/mus-genre.js',
                                        'js/directives/mus-genretabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.mus-song-view', {
                        url: '/music/song-view',
                        templateUrl: 'partials/mus-song-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css',
                                    'js/controllers/ScreenCtrl.js']);
                                }
                            ]
                        }

                    })
                    .state('app.mus-genre-edit', {
                        url: '/music/edit-display',
                        templateUrl: 'partials/mus-genre-edit.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css',
                                    'js/controllers/ScreenCtrl.js']);
                                }
                            ]
                        }    
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'partials/mail-compose.html'
                    })
                    .state('app.mail.view', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'partials/mail-view.html'
                    })
                    .state('app.charts', {
                        url: '/charts',
                        template: '<div ui-view class=""></div>',
                    })

                    .state('app.charts.chartjs', {
                        url: '/chartjs',
                        templateUrl: 'partials/soc-activity.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })

                    .state('app.charts.sparkline', {
                        url: '/sparkline',
                        templateUrl: 'partials/soc-login.html'

                    })
                   .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
						url: '/login',
                        templateUrl: 'partials/soc-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/login.js',
                                         '../bower_components/font-awesome/css/font-awesome.css']);
                                    }
                                ]
                            }
                    })
                    .state('access.logout', {
						url: '/login',
                        templateUrl: 'partials/soc-login.html',
                        controller : "logout",
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/login.js',
                                         '../bower_components/font-awesome/css/font-awesome.css']);
                                    }
                                ]
                            }
                    })

                    .state('access.register', {
                        url: '/register',
                        templateUrl: 'partials/soc-register.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/register.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'partials/soc-forgotpwd.html',
                    })




            }
        ]
    );
app.controller('loginCheck', ['$scope', '$state', '$localStorage',
  function ($scope, $state, $localStorage) {
   $scope.token = "";
   if (!$localStorage.username){
   $state.go('access.login');
   }
  }]);
  app.controller('logout', ['$scope','$http', '$state', '$localStorage',
  function ($scope,$http, $state, $localStorage) {
    $localStorage.$reset()
    $http({url:"/api/logout",
	method: "GET",
	params:{client_id: $localStorage.client_id}
}).then(function(response) {
	$scope.status = response.data.status;
        if ($scope.status=="OK" ) {
            
            $state.go('access.login');
        }else{
            $scope.authError = 'logout failed';
        }});
  }]);

