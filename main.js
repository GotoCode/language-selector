
$("document").ready(function() {
	
	$(".accordion").accordion({
		animate: 150,
		active: false,
		collapsible: true,
		heightStyle: "content"
	});

	//$("#first-accordion").hide();
	$("#second-accordion").hide();
	$("#third-accordion").hide();

	$("#btn-project-topics").on("click", function(e) {
		$("#first-accordion").show();
		$("#second-accordion").hide();
		$("#third-accordion").hide();
	});

	$("#btn-developer-roles").on("click", function(e) {
		$("#second-accordion").show();
		$("#first-accordion").hide();
		$("#third-accordion").hide();
	});

	$("#btn-programming-languages").on("click", function(e) {
		$("#third-accordion").show();
		$("#first-accordion").hide();
		$("#second-accordion").hide();
	});

});
