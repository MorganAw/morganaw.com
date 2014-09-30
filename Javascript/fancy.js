var main = function(){
//	--== Arrow to Previous Page ==--
    $(".arrow-prev").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var prevPage = thisPage.prev(".page");
		if(prevPage.length === 0)
			prevPage = $(".page").last();

		// Pass to page swapper	
		shiftPrevPage(thisPage, prevPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var prevDot = thisDot.prev();
		if(prevDot.length === 0)
			prevDot = $(".dot").last();
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var prevNav = thisNav.prev();
		if(prevNav.length === 0)
			prevNav = $(".top-nav").last();
		
		// Pass to etc swapper
		shiftNextEtc(thisDot, prevDot, thisNav, prevNav);
	});

//	--== Arrow to Next Page ==--
    $(".arrow-next").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = thisPage.next(".page");
		if(nextPage.length === 0)
			nextPage = $(".page").first();

		// Pass to page swapper
		shiftNextPage(thisPage, nextPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = thisDot.next();
		if(nextDot.length === 0)
			nextDot = $(".dot").first();
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = thisNav.next();
		if(nextNav.length === 0)
			nextNav = $(".top-nav").first();
		
		// Pass to etc swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
	});
	
//	--== Logo Click ==--
	$("#intro-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 0 )");

		// If clicking to current page, don't do anything
		if(thisPage.index()-1 == 0){
		}
		// All other pages are "next" to this one so use prev swap
		else
			shiftPrevPage(thisPage, nextPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 0 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 0 )");
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
			shiftPrevPage(thisPage, nextPage);
		}
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 1){
		}
		// All other pages are "previous" to this one, use next swap
		else{
			shiftNextPage(thisPage, nextPage);
		}

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 1 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 1 )");
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
			shiftPrevPage(thisPage, nextPage);
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 2){
		}
		// All other pages are "previous" to this one, use next swap
		else
			shiftNextPage(thisPage, nextPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 2 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 2 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
	});

//	--== Extracurriculars Click ==--
	$("#fun-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 3 )");
		
		// Handles pages "next" to this one, use prev swap
		if(thisPage.index()-1 > 3)
			shiftPrevPage(thisPage, nextPage);
		// If clicking to current page, don't do anything
		else if(thisPage.index()-1 === 3){
		}
		// All other pages are "previous" to this one, use next swap
		else
			shiftNextPage(thisPage, nextPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 3 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 3 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
	});

//	--== Contact Click ==--
	$("#contact-top").click(function(){
		// Declare pages to be swapped
		var thisPage = $(".active-page");
		var nextPage = $(".page:eq( 4 )");
		
		// If clicking to current page, don't do anything
		if(thisPage.index()-1 === 4){
		}
		// All other pages are "previous" to this one, use next swap
		else
			shiftNextPage(thisPage, nextPage);

		// Declare dots to be swapped
		var thisDot = $(".active-dot");
		var nextDot = $(".dot:eq( 4 )");
		// Declare navs to be swapped
		var thisNav = $(".top-nav-active");
		var nextNav = $(".top-nav:eq( 4 )");
		// Pass to dot swapper
		shiftNextEtc(thisDot, nextDot, thisNav, nextNav);
	});
};


//	--== Handle Next Page Swap ==--
var shiftPrevPage = function(cur, next){
	// Set pre-animation values for this page
	cur.css("right", "0px");
	cur.css("opacity", "1");
	cur.stop();

	// Animate this page
	cur.animate({right: "-=1500px", opacity: "0"}, 200, "swing", function(){
		// Remove active class after animate
		cur.removeClass("active-page");
		// Set pre-animation values for next page
		next.css("right", "1500px");
		next.css("opacity", "0");
		// Animate next page and add active class
		next.animate({right: "-=1500px", opacity: "1"}, 200).addClass("active-page");
	});
};

//    --== Handle Previous Page Swap ==--
var shiftNextPage = function(cur, prev){
	// Set pre-animation values for this page
	cur.css("right", "0px");
	cur.css("opacity", "1");
	cur.stop();

	// Animate this page
	cur.animate({right: "+=1500px", opacity: "0"}, 200, "swing", function(){
		// Remove active class after animate
		cur.removeClass("active-page");
		// Set pre-animation values for prev page
		prev.css("right", "-1500px");
		prev.css("opacity", "0");
		// Animate prev page and add active class
		prev.animate({right: "+=1500px", opacity: "1"}, 200).addClass("active-page");
	});
};

//    --== Handle Dot Swap ==--
var shiftNextEtc = function(curDot, nextDot, curNav, nextNav){
	console.log("hih");
	// Deal with dots
	curDot.removeClass("active-dot");
	nextDot.addClass("active-dot");
	
	// Deal with nav
	curNav.removeClass("top-nav-active");
	nextNav.addClass("top-nav-active");
};

$(document).ready(main);
