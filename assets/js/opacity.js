function Opacity(element){
	
	this.main = document.getElementById(element.main);
	this.final = document.querySelector(element.final);
	this.skills = document.querySelector(element.medio_info);
	this.principal = document.querySelector(element.principal);
	this.medio = document.querySelector(element.medio);
	const _this = this;
	
	window.addEventListener('scroll', function(){	
//	console.log(innerWidth);
		
		if(innerWidth >= 950){
			_this.main.classList.add('now');
		} else{
			_this.main.classList.remove('now');
		}
	})
		
		  //EVENTOS
			document.addEventListener('scroll', MeusProjectos);
			document.addEventListener('scroll', Habilidades);
			document.addEventListener('scroll', Principal);

	
	function MeusProjectos(){
		if (pageYOffset >= 900){
			_this.final.classList.remove('no-opacity');
			_this.final.classList.add('opacity');
		}else 
			{
			_this.final.classList.remove('opacity');
			_this.final.classList.add('no-opacity');
			}
		
			
	}
	
	function Habilidades(){
		
		if (pageYOffset >= 400 && pageYOffset <= 1100){
//			_this.skills.style.opacity = 1;
			_this.skills.classList.remove('no-opacity');
			_this.skills.classList.add('opacity');
		}else
			{
//			_this.skills.style.opacity = 0;
			_this.skills.classList.remove('opacity');
			_this.skills.classList.add('no-opacity');
			}
			
	}
	
	function Principal(){
		
		if (/*pageYOffset >= 400 &&*/ pageYOffset <= 550){
			
			_this.principal.classList.remove('no-opacity');
			_this.medio.classList.remove('no-opacity');
			_this.principal.classList.add('opacity');
			_this.medio.classList.add('opacity');
		}else
			{
			_this.principal.classList.remove('opacity');
			_this.medio.classList.remove('opacity');
			_this.principal.classList.add('no-opacity');
			_this.medio.classList.add('no-opacity');
			}	
	}
	
	
	
}