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