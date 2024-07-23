var express = require('express');
var app = express();

//Configurando o servidor para usar o EJS
app.set('view engine', 'ejs');

//Passando o caminho da pasta views 
app.set('views', 'src/views');

//Mostrando a página index.ejs
app.get('/', function(request, response){
    response.render('index');
});

app.get('/adicionar', function(request, response){
    response.render('adicionar');
});

//Iniciando o servidor
app.listen(3003, function(){
    console.log('Servidor rodando na porta 3003')
});