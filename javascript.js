var popup=document.getElementById("popup_container");

list.onclick = function(e)
  			 { 
  			 e.preventDefault(); 
  			 var elm = e.target;
  			  var audio = document.getElementById('sng');
  			   var source = document.getElementById('ads');
  			    source.src = elm.getAttribute('data-value');
  			     audio.load(); 
  			    audio.play();
  			    popup.style.display="flex";
 };