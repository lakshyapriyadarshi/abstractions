var alignment = new Array();
alignment[0] = 'right';
alignment[1] = 'right';
alignment[2] = 'left';

var margin = new Array();
margin[0] = '27.9px';
margin[1] = '41.0px';
margin[2] = '41.0px';

var num = Math.round(Math.random()*(alignment.length-1));

function writePhoto() {
		var photo = document.getElementById("photo_placeholder");

		photo.innerHTML = '<div id="photo-'+alignment[num]+'" class="photo">' + 
			'<img src="photos/photo.png" alt="Andrew Ferguson" /></div>';


		if (alignment[num] == 'left')
			document.getElementById('intro_text').style.marginLeft = margin[num];
		else
			document.getElementById('intro_text').style.marginRight = margin[num];
}
