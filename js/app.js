$(document).ready(function () {
	$('.ryu').mouseenter(function(){
		/*alert('mouse entered .ryu div')*/
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		console.log('mousedown');
		//play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//show hadouken & animate it
	})
	.mouseup(function(){
		console.log('mouse up');
		//ryu goes back to ready position
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();

	})
});