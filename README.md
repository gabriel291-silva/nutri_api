comando para rodar o docker
docker-compose up

documentação de utilização da api 

requsitos 

- docker 
- node 

softwares de verificaçao de dados sugestão :

- insominia 

raiz dos projeto / : 

rodar : docker-compose up 

para criar seu container e poder usar o banco postgres 

banco vai rodar na porta : 5432:5432⁠
podem vizualisar na porta : 8080:8080⁠


dentro da pasta api /api/ : 

rodar : yarn install 

para instalar todos os pacotes do projeto.

rodar : yarn migrate:dev 

para poder iniciar as tableas do prisma no banco postgres.

rodar : yarn dev 

para rodar o projeto na porta : 3333

link da api local : localhost:333/entradas


função para recuperar todos os dados em JavaScript : 

fetch('http://localhost:3333/entradas/all', {
  method: 'GET',
  mode: 'no-cors' // Define o modo da solicitação como 'no-cors'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados.');
    }
    return response.json();
  })
  .then(data => {
    // Como o modo é 'no-cors', você só poderá acessar certas propriedades da resposta
    console.log('Resposta recebida:', data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });


função para criar um item em JavaScritp : 

const data = {
  
    "colesterol" : 1,
    "description" : "teste",
    "fibras" : 1,
    "gorduraMonoinsaturadas" : 1,
    "gorduraPolisaturadas" : 1,
    "gorduraSaturada" : 1,
    "name" : "nomemclatura",
    "potassio" : 1,
    "quantity" : 1,
    "sodio" : 1,
    "sugar" :1,
    "carboidrato" : 1,
    "proteina" : 1,
    "calorias" : 1

};

fetch('http://localhost:3333/entradas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados enviados com sucesso:', data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

função para recupar item pelo nome : 

fetch('http://localhost:3333/entradas/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'name': 'valor_do_nome'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta recebida:', data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
