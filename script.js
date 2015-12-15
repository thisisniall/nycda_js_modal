$(document).ready(
	function(){
		var i = 0
		$(".modal-link").on("click", function(e){
			// prevent default is needed to avoid link taking us to a new page
			e.preventDefault();
			// primarily for testing
			alert("you have clicked!");
			// changes display option to reveal display:none element
			$(".outer-modal").css({"display": "block"})
			// the left and right arrow keys allow one to navigate through the modal - I tried duplicating this effect without the keyPress library and was encountering serious resistance - for an in-progress version of my efforts in this area, I've left some commented-out code where I was trying to build an alternate that didn't require the library on the bottom of the page.
		});

		// clicking anywhere on the page makes the image go away - only relevant if the link has been clicked
		$(".outer-modal").on("click", function(){
			$(".outer-modal").css({"display": "none"})
		});



		// have to set this counter outside the function, else it will reset every time i click
		// var i = 0
		$(".next-iteration").on("click", function(e){
			// prevent default is needed to avoid link taking us to a new page
			e.preventDefault();
			// testing to make sure this function is running
			alert("you triggered the next iteration")
			// array of images to cycle through
			var bigtext = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy.", "De bovendien degelijke in leeningen visschers af is behandelt. Deel af daar ze zien. Ton bedreven zin kostbaar inkrimpt. Dit men sterke pijlen stadje soegei enorme gezegd. Na kleederen nutteloos in nu japansche de. Ontginning dal doorzoeken ingezameld werkwijzen sap aanleiding voertuigen. Liep de over nu jaar te zout voet. Daar er woud heen te. Eigenaars in ad uitgaande afscheidt. Zelfs ze geest de meter eerst thans. Grayah lengte mijnen dat groeit ook men men. Caoutchouc onderlinge dividenden wantrouwen opgegraven meesleuren en al of. Doel vast vrij te land en ging zeer er."]
			 // increments to move through the array
			i = 0
			i+=1
			// if you reach the end of the array, move back to the first object in the array
			if (i == bigtext.length) {
			i = 0}
			// changes content of modal
			$(".inner-modal p").text(bigtext[i])
		});

			// keyPress cycling through modal options
			var listener = new window.keypress.Listener();
				listener.simple_combo("right", function() {
					console.log("You pressed right")
					var bigtext = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy.", "De bovendien degelijke in leeningen visschers af is behandelt. Deel af daar ze zien. Ton bedreven zin kostbaar inkrimpt. Dit men sterke pijlen stadje soegei enorme gezegd. Na kleederen nutteloos in nu japansche de. Ontginning dal doorzoeken ingezameld werkwijzen sap aanleiding voertuigen. Liep de over nu jaar te zout voet. Daar er woud heen te. Eigenaars in ad uitgaande afscheidt. Zelfs ze geest de meter eerst thans. Grayah lengte mijnen dat groeit ook men men. Caoutchouc onderlinge dividenden wantrouwen opgegraven meesleuren en al of. Doel vast vrij te land en ging zeer er."]
					i+=1
					// if you reach the end of the array, move back to the first object in the array
					if (i == bigtext.length) {
					i = 0}
					// changes content of modal
					$(".inner-modal p").text(bigtext[i])	
					});

			var listener = new window.keypress.Listener();
				listener.simple_combo("left", function() {
					console.log("You pressed left")
					var bigtext = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy.", "De bovendien degelijke in leeningen visschers af is behandelt. Deel af daar ze zien. Ton bedreven zin kostbaar inkrimpt. Dit men sterke pijlen stadje soegei enorme gezegd. Na kleederen nutteloos in nu japansche de. Ontginning dal doorzoeken ingezameld werkwijzen sap aanleiding voertuigen. Liep de over nu jaar te zout voet. Daar er woud heen te. Eigenaars in ad uitgaande afscheidt. Zelfs ze geest de meter eerst thans. Grayah lengte mijnen dat groeit ook men men. Caoutchouc onderlinge dividenden wantrouwen opgegraven meesleuren en al of. Doel vast vrij te land en ging zeer er."]
					// if you reach the end of the array, move back to the first object in the array
					if (i==0){
						i = bigtext.length-1
					} else if (i > 0) {
						i-=1
					}
					// changes content of modal
					$(".inner-modal p").text(bigtext[i])	
					});	

	}
);


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