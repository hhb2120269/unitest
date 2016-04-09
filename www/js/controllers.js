angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$http','$ionicTemplateCache',function($scope,$http,$templateCache,$ionicPopup,$ionicLoading) {
  $scope.method = 'GET';
  $scope.url = 'http-hello.html';
  //$scope.params = $http.params;

  var options = {
    date: new Date(),
    mode: 'date'
  };

  function onSuccess(date) {
    alert('Selected date: ' + date);
  }

  function onError(error) { // Android only
    alert('Error: ' + error);
  }

  datePicker.show(options, onSuccess, onError);

  $scope.fetch = function() {
    //$scope.code = null;
    //$scope.response = null;

    /*
    //loading
    // Setup the loader
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    */
    //$ionicLoading.show({
    //  template: "正在查询中，请稍后..."
    //});


    var testdata = {
      registerName:"admin",
      userPsd:"admin"
    };
    console.log('正在查询中，请稍后..'+JSON.stringify(testdata));
    //http example:
    var req = {
      method: 'POST',
      url: 'http://192.168.1.10:8080/hyzxweb/muser/login',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify(testdata),
      cache:false

    };

    $http(req).then(function(response){
      console.log("success\n"+response.status+JSON.stringify(response) );
    }, function(response){
      console.log("error\n"+response.status+JSON.stringify(response));
    });
    //$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    //then(function(response) {
    //  $scope.status = response.status;
    //  $scope.data = response.data;
    //  $ionicLoading.hide();
    //}, function(response) {
    //  $scope.data = response.data || "Request failed";
    //  $scope.status = response.status;
    //  $ionicLoading.hide();
    //});
  };

  $scope.updateModel = function(method, url) {//非双向绑定 此方法不会改变html的数值
    //console.log('updatemodel',$scope.method+$scope.url);
    //$scope.method = method;
    //$scope.url = url;
    //$scope.params = $http.params;
  };



  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if ($scope.text) {
      $scope.list.push(this.text);
      $scope.text = '';
    }
  };
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope ,$timeout,$ionicModal) {
  $scope.settings = {
    enableFriends: true
  };



  /////
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    //$ionicLoading.show({
    //  template: "正在查询中，请稍后..."
    //});

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
  .controller('TabCtrl',function($rootScope, $scope, $state, $ionicHistory){
    $rootScope.hideTabs = false;
    $scope.onTabSelect = function(){
      console.log(' on select');
    };
  })
;
