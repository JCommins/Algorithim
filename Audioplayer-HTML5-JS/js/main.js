var audio;

//Hide pause button initilially
$('#pause').hide();
	
//Initialize Audio
//pass in the first song -> 1st list item
initAudio($('#playlist li:first-child'));
//main function -> initializer
function initAudio(element){
	//takes in an element i.e. the first song -> first <li> tagvar audio; 
	//main function -> initializer
	var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

	//Create audio object & get the song
	audio = new Audio('media/' + song);
	
	//If there's no time i.e. if the song hasn't started yet
	if(!audio.currentTime){
		//then the display will be 0.00
		$('#duration').html('0.00');
	}
	/*
	generate the artist and title of song
	.text lets us put something there in text & thta's going to be the title variable 
	which holds element.text() --> getting it from the html; 
	*/
	$('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);
	
	//Insert cover 
	//cover variabe at line 13 --> comes from list item
	$('img.cover').attr('src','img/covers/' + cover);
	
	$('#playlist li').removeClass('active');
    element.addClass('active');
}


//Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//Pause Button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});
	
//Stop Button
$('#stop').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function(){
    audio.pause();
	//#playlist li.active -> gives the current  song -> we want the next 
    var next = $('#playlist li.active').next(); 
	//if we're on the last song and click the next, then go to the first song
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
	//will then re-initilialize the audio
    initAudio(next);
	audio.play();
	showDuration();
});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev(); 
	//if we're on the first song and click previous, it will go to the last song
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist Song Click
$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});
	
//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}