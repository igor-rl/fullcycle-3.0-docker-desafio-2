![header-igor-projetos](https://github.com/igor-rl/assets/blob/main/img/github-projetcs-header.jpg)

# Full Cycle 3.0 - desafio 2 - Node e Nginx

### Comando de execussão:

```bash
docker compose up
```

Ao acesse o app em `localhost:8080`. Sempre que a página for recarregada, um nome de usuario diferente será sorteado, adicionado no banco de dados e exibido na tela. 

#

### Enunciado

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

`<h1>Full Cycle Rocks!</h1>`<br>
`Lista de nomes cadastrada no banco de dados.`

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

A linguagem de programação para este desafio é Node/JavaScript.


<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Igor_Lage-blue?style=social&logo=github)](https://github.com/igor-rl) 

![Static Badge](https://img.shields.io/badge/14--12--2023-black)


</div>