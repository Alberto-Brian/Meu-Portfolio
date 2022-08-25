function Skillfull(skill){
	this.html = document.querySelector(skill.h_html);
	this.css = document.querySelector(skill.h_css);
	this.javascript = document.querySelector(skill.h_javascript);
	this.java = document.querySelector(skill.h_java);
	this.c = document.querySelector(skill.h_c);
	this.logica = document.querySelector(skill.h_logica);
	
	this.l_html = document.querySelector(skill.l_html);
//	console.log(this.l_html);
	this.l_habilidades = document.querySelector(skill.l_habilidades);
	this.l_css = document.querySelector(skill.l_css);
	this.l_javascript = document.querySelector(skill.l_javascript);
	this.l_java = document.querySelector(skill.l_java);
	this.l_c = document.querySelector(skill.l_c);
	this.l_githbu = document.querySelector(skill.l_github);
	
	const _this = this;
	
//	var habilidade = this.java;
	MostrarTexto(this.html);
	MostrarTexto(this.css);
	MostrarTexto(this.javascript);
	MostrarTexto(this.java);
	MostrarTexto(this.c);
	MostrarTexto(this.logica);
	
	
	
	function MostrarTexto(habilidade){
		
		habilidade.addEventListener('mouseenter', function(e){
		 
		_this.l_habilidades.style.display = 'none';	
	    if(habilidade === _this.html) _this.l_html.style.display = 'block';
		else if(habilidade === _this.css) _this.l_css.style.display = 'block';
		else if(habilidade === _this.javascript) _this.l_javascript.style.display = 'block';
		else if(habilidade === _this.java) _this.l_java.style.display = 'block';
		else if(habilidade === _this.c) _this.l_c.style.display = 'block';
		else if(habilidade === _this.logica) _this.l_githbu.style.display = 'block';
	});
	
	habilidade.addEventListener('mouseleave', DevolverTextoOriginal);
	
	function DevolverTextoOriginal()
		{
		_this.l_habilidades.style.display = 'block';
		_this.l_html.style.display = 'none';
		_this.l_c.style.display = 'none';
		_this.l_java.style.display = 'none';
		_this.l_javascript.style.display = 'none';
		_this.l_css.style.display = 'none';
		_this.l_githbu.style.display = 'none';
			
	}
	
	}
}