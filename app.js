var app = angular.module("reddit-app", ['ngSanitize', 'ui.bootstrap', 'ngAnimate']);

// app.controller('MainCtrl', function($scope, PostService){
 
//   $scope.posts = PostService.getPosts();
// });

app.controller('PostCtrl', function($scope, PostService){
  $scope.isCollapsed = true;
  $scope.isDropped = true;
  $scope.bool = false;

  $scope.posts = PostService.getPosts();

  $scope.addPost = function (post){
  	post.id = $scope.posts.length;
  	post.date = new Date();
  	post.votes = 0;
  	postToPush = {
  		id: post.id,
  		title: post.title,
  		author: post.author,
  		date: post.date,
  		img: post.img,
  		body: post.body
  	   }
  	$scope.posts.push(postToPush);
  	$scope.newPost = {};
  	$scope.post_form.$setPristine();
  };

  $scope.removePost = function (post){
  	var index = $scope.posts.indexOf(post);
  	$scope.posts.splice(index,1);
  	$scope.removed = 'Post successfully removed.';
  };

  $scope.addVote = function (post){
  	post.votes += 1;
  }
  $scope.subVote = function (post){
  	post.votes -= 1;
  }
  $scope.sort = "-votes";
  $scope.setSort = function(type){
  	if(type == 'votes'){
  		$scope.sort = '-votes'
  	} else {

  	$scope.sort = type;
  	}  
  };
});

app.controller('DropdownCtrl', function($scope) {
 
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
    ];
});

app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
});

app.controller('ButtonsCtrl', function ($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  $scope.checkResults = [];

  $scope.$watchCollection('checkModel', function () {
    $scope.checkResults = [];
    angular.forEach($scope.checkModel, function (value, key) {
      if (value) {
        $scope.checkResults.push(key);
      }
    });
  });
});

app.factory("PostService", [function () {
  var factory = {};

  factory.getPosts = function () {
    return PostList;
  }

  var PostList = [
    {id: 0, title: 'Malibu', author: 'Damon', date: new Date(), img: "http://hdontap.com/images/uploads/gallery_images/63/breaking-point-malibu-631.jpg", body:'I was in Malibu, blazin up with the homies. Dippin in the cool ocean, sipping wine & beers.', votes: 1, comments: [{author:"Casey", body: "That was chill"}, {author:"Stephen", body: "Those fish tacos were bomb"}] },
    {id: 1, title: 'Sedona', author: 'Stephen', date: new Date(), img: "http://phoenixsedonadaytrip.com/wp-content/uploads/2010/09/Sedona-2-small1.jpg", body:'Solo trip. I need some fresh landscapes', votes: 3, comments: [{author:"Jean-Bastiste", body: "A la prochaine"}, {author:"Stephen", body: "Thanks JB, bon voyage"}] },
    {id: 2, title: 'Vegas', author: 'Casey', date: new Date(), img: "http://addictedtocostco.com/wp-content/uploads/2015/03/20150317-1.jpg", body:'I was here for the Blackhat Hacker Conference', votes: -2, comments: [{author:"Casey", body: "Damn I wish I could just been alone!"}, {author:"Stephen", body: "Woops, I probably shouldn't of come"}] },  
  ];

  return factory;
}]);