var song1="song1.mp3"
var song2="song2.mp3"
var song3="song3.mp3"
var song4="song4.mp3"

//DOM variables.
var container=document.getElementById("downloads_tab");

var songsList=[song1,song2,song3,song4];

for(i=0;i<=songsList.length-1;i++){
				var divTag=document.createElement("div");
				divTag.id="s"+i+1;
				
				var imgI=document.createElement("img");
				imgI.src="m.jpg";
				imgI.setAttribute("width","50px");
				
				var audioTag=document.createElement("audio");
				audioTag.src="song1.mp3";
				audioTag.controls=true;
				audioTag.autoplay=true;
				imgI.setAttribute("height","50px");
				divTag.append(imgI);
				container.append(divTag);
}

songsList.onclick=function () {
			alert("hello");
}