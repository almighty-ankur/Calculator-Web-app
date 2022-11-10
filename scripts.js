let scrn = document.getElementById('input');

function screen(x){
	scrn.value=scrn.value+x
}

function ce(){
	scrn.value=" "
}
function c(){
	scrn.value = scrn.value.slice(0,-1);
}

function evalthis(){
	let screenvalue = document.getElementById('input').value;
	let res = Math.abs(eval(screenvalue))
	scrn.value = res
}