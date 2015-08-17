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

  $scope.addComment = function (post, comment){
  	commentToPush = {
  		author: comment.author,
  		body: comment.body
  	   }
  	  
  	post.comments.push(commentToPush);
  	this.newComment = {}; 
  	this.comment_form.$setPristine();
  }

  $scope.removeComment = function(post,comment,$index){
  	post.comments.splice($index,1);
  }

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
