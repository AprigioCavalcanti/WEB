var contentBoxBody = document.querySelector('.divContentBoxBody');
var rows = contentBoxBody.querySelectorAll('tr');

var disciplinas = [];

for (var i = 1; i < rows.length; i++) {//ignorando i=0 pois este é cabeçalho
	var row = rows[i];
    var columns = row.querySelectorAll("td"); //as colunas são: codigo+nome, periodo, atendida, tipo, ramificação, cred, ch, trava e turma no periodo
	var nomeCodigo = columns[0].textContent.trim();
	var codigo = nomeCodigo.split(" ")[0];
	var nome = nomeCodigo.replace(codigo + " ", "");
	var periodo = columns[1].textContent.trim();
	var tipo = columns[3].textContent.trim();
	var cred = columns[5].textContent.trim();
	var ch = columns[6].textContent.trim();
	var travaCredito = columns[7].textContent.trim();
	disciplinas.push({
		"nome" : nome, 
		"codigo" : codigo, 
		"periodo" : periodo, 
		"tipo" : tipo, 
		"creditos" : cred, 
		"carga_horaria" : ch, 
		"trava_credito" : travaCredito
	});
}

console.log(disciplinas);
