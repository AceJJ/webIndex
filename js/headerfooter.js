'use strict'
function $(a){if(a.substr(0,1) == '#')return document.getElementById(a.substr(1,a.length));else return document.querySelectorAll(a);}
function _(scr){
	var h='<div class="stanDisp"><div id="headerBody"><a href="index.html"><img id="logo" src="Images/LogoGrey.svg"/></a><div id="menu"><a href="mobilegames.html"><div id="menuMobile">Games</div></a><a href="about.html"><div id="menuAbout">About</div></a><a href="support.html"><div id="menuSupport">Support</div></a></div></div><div id="hBack"></div></div><div class="respDisp"><div id="hamMenu"><div class="ham"></div><div class="ham"></div><div class="ham"></div></div><a href="index.html"><img id="centerlogo" src="Images/LogoGrey.svg"/></a><div id ="hamDropDown"><a href="index.html"><div>Home</div></a><a href="mobilegames.html"><div>Games</div></a><a href="about.html"><div>About</div></a><a href="support.html"><div>Support</div></a></div></div></div>';
	var f='&copy; Copyright 2018 High Stakes Games, LLC. All rights reserved.<a id="Tos" href="termsofservice.html">Terms</a><a id="policy" href="privacypolicy.html">Privacy</a>';
	$('#header').innerHTML=h;$('#footer').innerHTML=f;$('#main').style.display='block';$('#hamMenu').addEventListener("click", actHam);
	if(scr){var s=$('#menu' + scr);s.style.borderBottom='4px solid #FF0808';s.style.paddingBottom='13px';}
}
function actHam(){var ham=$('.ham');var menu=$('#hamMenu');menu.removeEventListener("click", actHam);ham[0].classList.add("spRight");ham[1].style.display='none';ham[2].classList.add("spLeft");
menu.addEventListener("click", resetHam);$('#main').addEventListener("click", resetHam);$('#hamDropDown').style.display='block';}
function resetHam(){var ham=$('.ham');var menu=$('#hamMenu');menu.removeEventListener("click", resetHam);$('#main').removeEventListener("click", resetHam);ham[0].classList.remove("spRight");ham[1].style.display='block';ham[2].classList.remove("spLeft");
menu.addEventListener("click", actHam);$('#hamDropDown').style.display='none';}
