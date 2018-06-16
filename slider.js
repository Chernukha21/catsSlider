var sliderNext=1;
var sliderPrev=1;
var imgAmount = jQuery('#slider').children().length;

$(document).ready(function(){

	$('.but_2').click(function(){

	$('#slider').find("#"+sliderNext).hide();
	sliderNext += 1;
	
	if(sliderNext > 6){
		sliderNext = 1;
	}

	$('#slider').find("#"+sliderNext).show();
	
	
	
	});

	$('.but_1').click(function(){
		
	$('#slider').find("#"+sliderPrev).hide();
	sliderPrev--;

	if(sliderPrev < 1 ){
		sliderPrev = imgAmount;
	}

	$('#slider').find("#"+sliderPrev).show();

	});
});