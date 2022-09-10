(function(){
	
	var $body = document.querySelector('body');
	$body.classList.remove('no-js');
	$body.classList.add('js');
	
	var $button_vermais = document.querySelector('.button_vermais');
	var $box_projectos = document.querySelector('.projectos');
	var abertoSimNao = false;
	
	
	//Função menu com um objecto como parâmetro
  	Menu({
	container: '.header__nav',
	button: '.button-menu',
	lis : '.header__nav ul li'
	})
	
	//Habilidades
//	Skillfulls({
//	   h_html: '.h_html',
//	   h_css: '.h_css',
//	   h_javascript: '.h_javascript',
//	   h_java: '.h_java',
//	   h_c: '.h_c',
//	   h_logica: '.h_logica',
//	   paragrafo: '.paragrafo',
//	   infoVazio: '.info i'	
//		
//	})
//	
	
	Skillfull({
	   h_html: '.h_html',
	   h_css: '.h_css',
	   h_javascript: '.h_js',
	   h_java: '.h_java',
	   h_c: '.h_c',
	   h_logica: '.h_git',
	   
	  	l_habilidades: '.l_habilidades',
	  	l_html: '.l_html',
	  	l_css: '.l_css',
	  	l_javascript: '.l_javascript',
	  	l_java: '.l_java',
	  	l_c: '.l_c',
	  	l_github: '.l_github',	
		
	})
	
	
	//Opacidade ao rolar a tela
	
	Opacity({
		main: 'home',
		principal: '.principal',
		medio: '.medio',
		medio_info: '.medio-info',
		final: '.final'
	})
	
	
	//Moeda de habilidades 
	Moeda({
		moeda: '#moeda'
	})
	
//	document.addEventListener('scroll', function(e){
//		console.log('Y: ', pageYOffset);
//		console.log('innerWidth: ', innerWidth);
//	})
	
	
	//Botão sobre do menu
		
		const $button_sobre = document.getElementById('sobre');
		$button_sobre.addEventListener('click', function(e){
			scrollTo(0, 217);
		});
	
	
	
	//	$button_vermais.style.display = 'block';
	$button_vermais.addEventListener('click', abriFecha);
	
	function abriFecha(){
				if(!abertoSimNao){
					$box_projectos.style.height = 54.125 +'em'; //900
					abertoSimNao = true;
					$button_vermais.textContent = 'Ver menos';
				} else{
					$box_projectos.style.height = 27+'em'; //459
					abertoSimNao = false;
					$button_vermais.textContent = 'Ver mais';
				}
			}
	
	 window.addEventListener('resize', function(){

			if(innerWidth <= 513){
					$button_vermais.style.display = 'block';
			} else{
					$button_vermais.style.display = 'none';
			}
//		 console.log('Tamanho: ', innerWidth);
	 });
	
	
})()