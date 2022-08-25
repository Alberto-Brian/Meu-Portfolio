function Menu(config){
	this.nav = document.querySelector(config.container);
	this.btn = document.querySelector(config.button);
	this.opcao = document.querySelectorAll(config.lis);
	
	var _aberto = false;
	var _this = this;
	Fechar();
	
	this.btn.addEventListener('click', AbriFecha);


function AbriFecha(){
	if(!_aberto){
		
		Abrir();
	} else{
		
		Fechar();
	}
}

function Abrir(){
	var _top = _this.nav.getBoundingClientRect().top + 'px'; ////////////////////////
//	console.log(_this.nav.getBoundingClientRect().top);
	var _style = { maxHeight: 'calc(100vh - '+ _top +')', overflow: 'auto'}
	
	AplicarEstilo(_style);
	_aberto = true;
}


	function AplicarEstilo(_stilo){
		Object.keys(_stilo).forEach( function(i){
			_this.nav.style[i] = _stilo[i];
		} )
	}
	
function Fechar(){
	
	var _style = { maxHeight: '0px',  overflow: 'auto'}
	
	AplicarEstilo(_style);
	_aberto = false;
}
	
//  for(var i = 0; i <= this.opcao.length; i++ ){
//	  var lista = this.opcao[i]; 
//	  lista.addEventListener('click', function(e){
//		  Fechar();
//	  })
//  }	
}