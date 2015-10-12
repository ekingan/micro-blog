console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	
	$('button').on('click', function(event){    //on click of button
		event.preventDefault();  //prevents default
		var post = $('#write-post').val(); //makes a variable out of the input 
		$('ul').prepend('<li class="list-unstyled">' + post + '</li>');

		count = count + 1;
   	console.log(count);
   	postCount(count);
    $('#write-post').val("");
	});

   var count = 0;
   var countPosts = function () {
   $('button').on('click', function() {
   
		});

   };

   var postCount = function(count){
 		if (count === 1){
 			$('h5').text("There has been " + count + " blog post");	
 		} else {
 		$('h5').text("There have been " + count + " blog posts");


 }
};
	$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
	// var Modal = function (){
	// 	this.posts =  posts;
	// 	localStorage = [];
	// };

	// Modal.posts.push(input);	
	// console.log(localStorage);
 	
});
