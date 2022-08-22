function Skillfulls(skill){
	this.html = document.querySelector(skill.h_html);
	this.css = document.querySelector(skill.h_css);
	this.javascript = document.querySelector(skill.h_javascript);
	this.java = document.querySelector(skill.h_java);
	this.c = document.querySelector(skill.h_c);
	this.logica = document.querySelector(skill.h_logica);
	this.paragrafo = document.querySelector(skill.paragrafo);
	this.paragrafoVazio = document.querySelector(skill.infoVazio);
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
		_this.paragrafoVazio.textContent = '';
	if(habilidade === _this.html) _this.paragrafo.textContent = 'Estou aprendendo HTML';
		else if(habilidade === _this.css) _this.paragrafo.textContent = 'Estou aprendendo o CSS';
		else if(habilidade === _this.javascript) _this.paragrafo.textContent = 'Estou aprendendo JavaScript';
		else if(habilidade === _this.java) _this.paragrafo.textContent = 'Estou aprendendo a linguagem Java';
		else if(habilidade === _this.c) _this.paragrafo.textContent = 'Estou aprendendo a linguagem C';
		else if(habilidade === _this.logica) _this.paragrafo.textContent = 'Estou aprendendo a lógica de programação';
		else if(habilidade === _this.css) _this.paragrafo.textContent = 'Estou aprendendo o CSS';
	});
	
	habilidade.addEventListener('mouseleave', DevolverTextoOriginal);
	
	function DevolverTextoOriginal()
		{
		
		_this.paragrafo.innerHTML = 'Eu sou estudante universitário, nunca trabalhei em uma empresa, sou iniciante de programação frontend e este é o meu primeiro projecto. Estou procurando uma oportunidade para estagiar e conseguir desenvolver as minhas habilidades. Comecei a estudar programação em 2019 e com certeza serei programador a vida inteira, portanto preciso de uma equipe para auxiliar';
		_this.paragrafoVazio.textContent = 'Seleccione uma habilidade e leia a descrição';
	}
	
	}
}