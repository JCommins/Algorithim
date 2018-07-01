var audio; 

//Hide pause button initilially
$('#pause').hide(); 

//Initialize Audio
//pass in the first song -> 1st list item
initAudio($('#playlist li:first-child')); 

//main function -> initializer
function initAudio(element){
	//takes in an element i.e. the first song -> first <li> tag
	//get  an attribute --> attribute to get is song
	var song = element.attr('song'); 
	//get the title --> the actual text
	var title = element.text(); 
	var cover = element.attr('cover'); 
	var artist = element.attr('artist'); 
	
	//Create audio object & get the song
	audio = new Audio ('media/' + song); 

	//if there's no time i.e. if the song hasn't started yet
	if(!audio.currentTime){
		//then the display will be 0.00
		$('#duration').html('0.00'); 
	}

	//generate the artist and title of song
	//.text lets us put something there in text & thta's going to be the title variable 
	//which holds element.text() --> getting it from the html; 
	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);
	
	//Insert cover 
	//cover variabe at line 13 --> comes from list item
	$('img.cover').attr('src','img/covers/' +cover);
	
	//want to remove the active class from the last song and put it in this 
	
	$('playlist li').removeClass('active'); 
	element.addClass('active'); 
}

//Play Button 
$('#play').click(function(){
	audio.play(); //use the API -> created the new object audio -> have the song, its pointing toward the media directory
	$('#play').hide(); 
	$('#pause').show(); 
	$('#duration').fadeIn(400); 
	showDuration(); //make so the timer goes along with song
});

//Pause Button 
$('#pause').click(function(){
	audio.pause(); //use the API -> created the new object audio -> have the song, its pointing toward the media directory
	$('#pause').hide(); 
	$('#play').show(); 
});

//no stop.audio -> can pause song and reset to zero -> stop functionality
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
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
	audio.play();
	showDuration();
});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
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

//time duration 
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get Hours & Minutes
		var secs = parseInt(audio.currentTime % 60); 
		var mins = parseInt((audio.currentTime/ 60) % 60); 
		//Add 0 if less than 10
		if(secs < 10){
			secs = '0' + secs;
		}
		$('#duration').html(mins + '.' +secs); 
		var value = 0; 
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime); 
		}
		//calculating the position of the progress bar when it plays
		//dynamically setting the width property of the progress div
		$('#progress').css('width', value+'%'); 
	}); 
}