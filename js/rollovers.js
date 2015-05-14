$(document).ready(function(){
		$('.fourcol').hover(function(){
			// Hover in
			$(this).children('.content').animate({height:'100px'},100);
			$(this).children().children('.txt').animate({top:'0'},300);
		},function(){
			// Hover out
			$(this).children('.content').animate({height:'0'},300)
			$(this).children().children('.txt').animate({top:'80px'},100);
	});
});


$(document).ready(function(){
		$('.threecol').hover(function(){
			// Hover in
			$(this).children('.contentAds').animate({height:'100px'},100);
			$(this).children().children('.txtAds').animate({top:'0'},300);
		},function(){
			// Hover out
			$(this).children('.contentAds').animate({height:'0'},300)
			$(this).children().children('.txtAds').animate({top:'80px'},100);
	});
});