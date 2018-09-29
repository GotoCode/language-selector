
$("document").ready(function() {

	$("#second-accordion").hide();
	$("#third-accordion").hide();

	$("#btn-project-topics").on("click", function(e) {
		$("#btn-project-topics").removeClass("active").addClass("active");
		$("#btn-developer-roles").removeClass("active");
		$("#btn-programming-languages").removeClass("active");

		$("#first-accordion").show();
		$("#second-accordion").hide();
		$("#third-accordion").hide();
	});

	$("#btn-developer-roles").on("click", function(e) {
		$("#btn-project-topics").removeClass("active");
		$("#btn-developer-roles").removeClass("active").addClass("active");
		$("#btn-programming-languages").removeClass("active");

		$("#second-accordion").show();
		$("#first-accordion").hide();
		$("#third-accordion").hide();
	});

	$("#btn-programming-languages").on("click", function(e) {
		$("#btn-project-topics").removeClass("active");
		$("#btn-developer-roles").removeClass("active");
		$("#btn-programming-languages").removeClass("active").addClass("active");

		$("#third-accordion").show();
		$("#first-accordion").hide();
		$("#second-accordion").hide();
	});

});
