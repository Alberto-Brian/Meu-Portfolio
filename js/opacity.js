function Opacity(element){
	this.final = document.querySelector(element.final);
	this.skills = document.querySelector(element.medio_info);
	this.principal = document.querySelector(element.principal);
	this.medio = document.querySelector(element.medio);
	const _this = this;
	
	
	document.addEventListener('scroll', MeusProjectos);
	document.addEventListener('scroll', Habilidades);
	document.addEventListener('scroll', Principal);
	
	function MeusProjectos(area){
		
		if (pageYOffset >= 900){
			_this.final.style.opacity = 1;
		}else
			{
				_this.final.style.opacity = 0;
			}
			
	}
	
	function Habilidades(){
		
		if (pageYOffset >= 400 && pageYOffset <= 1100 ){
			_this.skills.style.opacity = 1;
		}else
			{
				_this.skills.style.opacity = 0;
			}
			
	}
	
	function Principal(){
		
		if (/*pageYOffset >= 400 &&*/ pageYOffset <= 550 ){
			_this.principal.style.opacity = 1;
			_this.medio.style.opacity = 1;
		}else
			{
			_this.principal.style.opacity = 0;
			_this.medio.style.opacity = 0;
			}
			
	}
	
}