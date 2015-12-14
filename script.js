$(document).ready(
	function(){
		var i = 0
		$(".lightbox-link").on("click", function(e){
			// prevent default is needed to avoid link taking us to a new page
			e.preventDefault();
			// primarily for testing
			alert("you have clicked!");
			// changes display option to reveal display:none element
			$(".outer-lightbox").css({"display": "block"})
			// var imgarray = ["'imgs/monkeyteeth.jpg'", "'imgs/catsmile.jpg'", "'imgs/itsaparty.jpg'", "'imgs/hippoanddog.jpg'"]
			// $('.outer-lightbox').keydown(function (e) {
			// 	// the right keycode
			// 	if (e.keyCode == 39) {
			// 		console.log("You pressed right")
			// 		i+=1
			// 		// if you reach the end of the array, move back to the first object in the array
			// 		if (i == imgarray.length) {
			// 		i = 0}
			// 		// this .html() changes the content INSIDE of the inner-lightbox div
			// 		$(".inner-lightbox").html( "<img id='this-image' src=" + imgarray[i] + ">" )	
			// 	} else if (e.keyCode == 37) {
			// 		console.log("You pressed left")
			// 		// if you reach the end of the array, move back to the first object in the array
			// 		if (i==0){
			// 			i = imgarray.length-1
			// 		} else if (i > 0) {
			// 			i-=1}
			// 		// this .html() changes the content INSIDE of the inner-lightbox div
			// 		$(".inner-lightbox").html( "<img id='this-image' src=" + imgarray[i] + ">" )	
			// 		};
			// 	});

			var listener = new window.keypress.Listener();
				listener.simple_combo("right", function() {
					console.log("You pressed right")
					var imgarray = ["'imgs/monkeyteeth.jpg'", "'imgs/catsmile.jpg'", "'imgs/itsaparty.jpg'", "'imgs/hippoanddog.jpg'"]
					i+=1
					// if you reach the end of the array, move back to the first object in the array
					if (i == imgarray.length) {
					i = 0}
					// this .html() changes the content INSIDE of the inner-lightbox div
					$(".inner-lightbox").html( "<img id='this-image' src=" + imgarray[i] + ">" )	
					});

			var listener = new window.keypress.Listener();
				listener.simple_combo("left", function() {
					console.log("You pressed left")
					var imgarray = ["'imgs/monkeyteeth.jpg'", "'imgs/catsmile.jpg'", "'imgs/itsaparty.jpg'", "'imgs/hippoanddog.jpg'"]
					// if you reach the end of the array, move back to the first object in the array
					if (i==0){
						i = imgarray.length-1
					} else if (i > 0) {
						i-=1
					}
					// this .html() changes the content INSIDE of the inner-lightbox div
					$(".inner-lightbox").html( "<img id='this-image' src=" + imgarray[i] + ">" )	
					});

		});

		// clicking anywhere on the page makes the image go away - only relevant if the link has been clicked
		$(".outer-lightbox").on("click", function(){
			$(".outer-lightbox").css({"display": "none"})
		});

		// have to set this counter outside the function, else it will reset every time i click
		// var i = 0
		$(".next-iteration").on("click", function(e){
			// prevent default is needed to avoid link taking us to a new page
			e.preventDefault();
			// testing to make sure this function is running
			alert("you triggered the next iteration")
			// array of images to cycle through
			var imgarray = ["'imgs/monkeyteeth.jpg'", "'imgs/catsmile.jpg'", "'imgs/itsaparty.jpg'", "'imgs/hippoanddog.jpg'"]
			 // increments to move through the array
			i+=1
			// if you reach the end of the array, move back to the first object in the array
			if (i == imgarray.length) {
			i = 0}
			// this .html() changes the content INSIDE of the inner-lightbox div
			$(".inner-lightbox").html( "<img id='this-image' src=" + imgarray[i] + ">" )
		});

// these are keyboard-input listener events relating to
// var listener = new window.keypress.Listener();
// listener.simple_combo("shift r", function() {
//     console.log("You pressed shift+r");
// });



	}
);

