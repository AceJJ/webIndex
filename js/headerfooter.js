'use strict'
function $(a){return document.querySelector(a);}function $$(a){return document.querySelectorAll(a);}
function _(){
	const h = '<div class="stanDisp">' +
			  '<div id="headerBody">' +
			  '<a href="index.html"><img id="logo" src="Images/LogoGrey.svg"/></a>' +
			  '<div id="menu">' +
			  '<a href="onlinegames.html"><div>Web</div></a>' +
		      '<a href="mobile.html"><div>Mobile</div></a>' +
		      '<a href="about.html"><div>About</div></a>' +
	          '</div>' +
	          '</div>' +
	          '<div id="hBack"></div>' +
	          '</div>' +
	          '<div class="respDisp">' +
			  '<a href="index.html"><img id="centerlogo" src="Images/LogoGrey.svg"/></a>' +
	          '</div>' +
	          '</div>';
	$('#header').innerHTML = h;
	const f = '&copy; Copyright 2018 High Stakes Games, LLC. Use of this site constitutes acceptance of the&nbsp;' +
			  '<a id="Tos" href="pages/termsofservice.html">Terms of Service</a>';
	$('#footer').innerHTML = f;
}
