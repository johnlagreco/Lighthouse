$(document).ready(
	function(){

	$(".lightbox-link").on("click",function(e){
		e.preventDefault();
		var $image = $("#this-image");
		$image.attr("src", $(this).attr("src"));
		$(".outer-lightbox").show();
		$(".outer-lightbox").on("click",function(){
			$(".outer-lightbox").hide();
		});

	});	
});