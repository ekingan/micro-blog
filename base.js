console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	
	$('button').on('click', function(event){    //on click of post button
		event.preventDefault();  //prevents default
		var post = $('#write-post').val(); //creates variable for posts
		// creates variable for css content of adding a comment box
		var $addComment = '<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" type="button" id="comment">Comment</button></span><input type="text" class="form-control" id="write-comment" placeholder="make a comment..."></div><hr>'; //makes a variable out of the input 
		if (post !== ''){  //keeps from posting blank posts
			//adds posts to the list, newest on top
		$('ul').prepend('<div class="well well-sm"><li class="list-unstyled">' + post + '</li></div>' + $addComment);
		//counts how many posts there are
		count = count + 1;
   	console.log(count);
   	//executes the postCount function to count posts
   	postCount(count);
   	//executes postComments funciton which posts total posts number to blog
   	assignID(count);
   	postComment(count);
   	
   }
    $('#write-post').val(""); //clears out post input box


	});
		//funciton for counting posts
   var count = 0; //initializes count to zero
   var countPosts = function () {
   $('button').on('click', function() {  //on click, counts posts
   
		});

   };

   
//takes count and posts it to blog 
   var postCount = function(count){
 		if (count === 1){
 			$('h5').text("There has been " + count + " blog post");	//fixes grammer
 		} else {
 		$('h5').text("There have been " + count + " blog posts");


 }
};
//adds tooltip to posts button
	$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
	//posts comment
	var postComment = function (count){
		$('button').on('click', function(event){
   	event.preventDefault();
   	var comment = $('#write-comment').val();
   	console.log(comment);
   	if (comment !== ''){
   		
   			var countID = '"#' + count + '"';
   			console.log(countID);
   			//I want to assign the countID to the jQuery selector but cannot get it to work
   			$('li:eq(0)').append('<div class="well well-sm"><li class="list-unstyled">' + comment + '</li></div>');
   			$('#write-comment').val('');

   		
   	}
   });
	};
//assigns an ID to each blog post
	var assignID = function (count){
		$('button').on('click', function(event){
			event.preventDefault();
			if (post !== ''){
				$('li').eq(count);
				console.log(count);
			}
		} );
	};

 	
});
