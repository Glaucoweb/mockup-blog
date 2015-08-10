$(document).ready(function() {
	$("#submit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		if (name == '' || email == '') {
			$('.error').fadeIn();
			// alert("Campo obrigatório");
		};
	});
});

// Active menu navigation
$('.menu-secundary ul li > a').click(function() {
	$(this).parent().removeClass("active");
	$(this).parent().addClass("active");
	removeActive();
	return false;

});

function removeActive() {
	$('.box-article').click(function(){
		if ($('.menu-secundary ul li').hasClass('active')){
			$('.menu-secundary ul li').removeClass("active");
		}
	});
};