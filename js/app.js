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
		playHadouken();	//play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		//show hadouken & animate it
		.animate(
			{'left':'300px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','-212px');
			}
		);
	})
	
	
	.mouseup(function(){
		console.log('mouse up');
		//ryu goes back to ready position
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();

	})
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}