app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/login/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignUpCtrl', function ($scope, AuthService, $state) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendLogin = function (signupInfo) {

        $scope.error = null;

        console.log('signing up');

        AuthService.signup(signupInfo).then(function (user) {
            console.log(user);
            $state.go('additional');
        }).catch(function () {
            $scope.error = 'Invalid signup credentials.';
        });

    };

});
