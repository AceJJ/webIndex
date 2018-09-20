function $(a){if(a.substr(0,1) == '#')return document.getElementById(a.substr(1,a.length));else return document.querySelectorAll(a);}
function _(scr){
	var h='<div class="stanDisp"><div id="headerBody"><a href="index.html"><img id="logo" src="Images/LogoGrey.svg"/></a>' +
			  '<div id="menu"><a href="mobilegames.html"><div id="menuMobile">Games</div></a><a href="about.html"><div id="menuAbout">About</div></a>' +
	          '</div></div><div id="hBack"></div></div><div class="respDisp"><a href="index.html"><img id="centerlogo" src="Images/LogoGrey.svg"/></a></div></div>';
	var f='&copy; Copyright 2018 High Stakes Games, LLC. Use of this site constitutes acceptance of the <a id="Tos" href="termsofservice.html">Terms of Service</a>';
	$('#header').innerHTML=h;$('#footer').innerHTML=f;$('#main').style.display='block';
	if(scr){var s=$('#menu' + scr);s.style.borderBottom='4px solid #FF0808';s.style.paddingBottom='21px';}
}
