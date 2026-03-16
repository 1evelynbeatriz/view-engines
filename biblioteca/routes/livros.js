var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Lista de livros simulando um banco de dados
  const listaDeLivros = [
    { titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', capa: 'https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg' },
    { titulo: 'Harry Potter e a Câmara Secreta', autor: 'J.K. Rowling', capa: 'https://m.media-amazon.com/images/I/81S9p9ny8zL.jpg' },
    { titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'J.K. Rowling', capa: 'https://m.media-amazon.com/images/I/81lAPL9Fl0L.jpg' }
  ];

  // Renderiza a view 'biblioteca' passando a variável 'livros'
  res.render('biblioteca', { title: 'SAPIENS', livros: listaDeLivros });
});