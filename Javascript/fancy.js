var main = function(){
//	--== Left/Right Arrow to Previous Page ==--
    $("body").keydown(function(e){
	if(e.keyCode == 37){
	    swapPageEvent("prev");
	}
	if(e.keyCode == 39){
	    swapPageEvent("next");
	}
    });
//	--== Arrow to Previous Page ==--
    $(".arrow-prev").click(function(){
		swapPageEvent("prev");
    });

//	--== Arrow to Next Page ==--
    $(".arrow-next").click(function(){
		swapPageEvent("next");
    });
	
//	--== Logo Click ==--
    $("#intro-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq(0)");

		// If clicking to current page, don't do anything
		// All other pages are "next" to this one so use prev swap
		if(thisPage.attr("id") != "intro")
			swapPage(thisPage, nextPage, "prev");

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 0 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $("#intro-top");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
    });

//	--== About Me Click ==--
    $("#about-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 1 )");
		
		// Handles pages "next" to this one, use prev swap
		if(thisPage.index()-1 > 1){
			swapPage(thisPage, nextPage, "prev");
		}
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 1){
		}
		// All other pages are "previous" to this one, use next swap
		else{
			swapPage(thisPage, nextPage, "next");
		}

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 1 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 0 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
    });
	
//	--== Projects Click ==--
    $("#projects-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 2 )");

		// Handles pages "next" to this one, use prev swap
		if(thisPage.index()-1 > 2)
			swapPage(thisPage, nextPage, "prev");
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 2){
		}
		// All other pages are "previous" to this one, use next swap
		else
			swapPage(thisPage, nextPage, "next");

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 2 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 1 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
    });

//	--== Contact Click ==--
    $("#contact-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 3 )");
		
		// Handles pages "next" to this one, use prev swap
		if(thisPage.index()-1 > 3)
			swapPage(thisPage, nextPage, "prev");
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 3){
		}
		// All other pages are "previous" to this one, use next swap
		else
			swapPage(thisPage, nextPage, "next");

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 3 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 2 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
    });

//	--== Contact Click ==--
    $("#contact-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 4 )");
	
		// If clicking to current page, don't do anything
		// All other pages are "previous" to this one, use next swap
		if(thisPage.attr("id") != "contact")
			swapPage(thisPage, nextPage, "next");

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 4 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 3 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
    });
};

//	--== Handle Next Page Event ==--
var swapPageEvent = function(direction){
    // Declare pages to be swapped
    var thisPage = $(".active-page");
	if(direction == "next"){
		var nextPage = thisPage.next(".page");
		if(nextPage.length === 0)
			nextPage = $(".page").first();
	}
	else{
		var nextPage = thisPage.prev(".page");
		if(nextPage.length === 0)
			nextPage = $(".page").last();
	}

    // Pass to page swapper
    swapPage(thisPage, nextPage, direction);

    // Declare dots to be swapped
    var thisDot = $(".active-dot");
	if(direction == "next"){
		var nextDot = thisDot.next();
		if(nextDot.length === 0)
			nextDot = $(".dot").first();
	}
	else{
		var nextDot = thisDot.prev();
		if(nextDot.length === 0)
			nextDot = $(".dot").last();
	}
	
    // Declare navs to be swapped
    var thisNav = $(".top-nav-active");
	if(direction == "next"){
		var nextNav = thisNav.next();
		if(thisNav.attr("id") == "contact-top")
			nextNav = $("#intro-top");
		else if(nextNav.length === 0)
			nextNav = $(".top-nav").first();
	}
	else{
		var nextNav = thisNav.prev();
		if(thisNav.attr("id") == "about-top")
			nextNav = $("#intro-top");
		else if(nextNav.length === 0)
			nextNav = $(".top-nav").last();
	}
		
    // Pass to etc swapper
    shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
};

//    --== Handle Previous Page Swap ==--
var swapPage = function(cur, next, direction){
    // Set pre-animation values for this page
    cur.css("right", "0px");
    cur.css("opacity", "1");
    $(document.body).css("overflow", "hidden");

	if(direction == "next"){
		// Set pre-animation values for prev page
		next.css("right", "-1500px");
		next.css("opacity", "0");
		// Animate this page
		cur.animate({right: "+=1500px", opacity: "0"}, 100, "swing", function(){
			// Remove active class after animate
			cur.removeClass("active-page");
			// Animate prev page and add active class
			next.animate({right: "+=1500px", opacity: "1"}, 100, "swing", function(){
				$(document.body).css({"overflow": "auto"});
			}).addClass("active-page");
		});
	}
	else{
		// Set pre-animation values for prev page
		next.css("right", "1500px");
		next.css("opacity", "0");
		// Animate this page
		cur.animate({right: "-=1500px", opacity: "0"}, 100, "swing", function(){
			// Remove active class after animate
			cur.removeClass("active-page");
			// Animate prev page and add active class
			next.animate({right: "-=1500px", opacity: "1"}, 100, "swing", function(){
				$(document.body).css({"overflow": "auto"});
			}).addClass("active-page");
		});
	}
};

//    --== Handle Dot Swap ==--
var shiftNextEtc = function(curDot, nextDot, curNav, nextNav){
    // Deal with dots
    curDot.removeClass("active-dot");
    nextDot.addClass("active-dot");
	
    // Deal with nav
    curNav.removeClass("top-nav-active");
    nextNav.addClass("top-nav-active");
};

$(document).ready(main);
