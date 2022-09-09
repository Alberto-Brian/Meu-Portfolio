function Moeda(moeda){
	this.moeda = document.querySelector(moeda.moeda);
	const _this = this;

	setInterval(function(){
		var altura_actual = _this.moeda.getBoundingClientRect().height.toFixed(0);
		if(altura_actual == 0){
			_this.moeda.style.background = 'url(imagens2/'+(Math.random()*6).toFixed(0)+'.png)';
			_this.moeda.style.backgroundPosition = 'center';
			_this.moeda.style.backgroundSize = 'cover';
//			console.log('activado: ', (Math.random()*5).toFixed(0));
//			console.log('altura actual: ', altura_actual);
		}
	}, 1)
	
}