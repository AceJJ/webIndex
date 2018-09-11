function $(a){return document.querySelector(a);}function $$(a){return document.querySelectorAll(a);}
function _(){
	document.addEventListener('keydown', (event) => {
		const k = event.key;
		switch(k){
			case 'ArrowUp':t -= 10;
				$('#p').style.top = t + '';
				break;
			case 'ArrowDown':t += 10;
				$('#p').style.top = t + '';
				break;
			default:
				break;
		}
	});
}