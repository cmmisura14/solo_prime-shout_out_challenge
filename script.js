
$(document).ready(function(){
	
	$("li").addClass("shoutOut");
	$(".shoutOut").hide();
	//var compliment = $("li").next(".shoutOut");
	var i = 1;
	$(".nextStudent").click(function(){

		$(".shoutOut:nth-of-type(" + i + ")").show();
		$(".shoutOut:nth-of-type(" + i + ")").animate({
			height:"+=50",
			fontSize:"+=5"
		}, 5000, function(){
			$(this).fadeOut("slow");
		});
		
		i++;


	});


	
});