var contentBoxBody = document.querySelector('.divContentBoxBody');
var rows = contentBoxBody.querySelectorAll('tr');

var disciplinas = [];

for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var columns = row.querySelectorAll('td');

    var nomeCodigo = columns[0].textContent.trim();
    var codigo = nomeCodigo.split(" ")[0];

    disciplinas.push({
        codigo: codigo,
        nome: nomeCodigo.substring(codigo.length).trim()
    });
}

console.log(disciplinas);