# Projeto X

## Comando para Rodar o Docker

```
docker-compose up
```

## Documentação de Utilização da API

### Requisitos

- Docker
- Node.js

### Softwares de Verificação de Dados (Sugestão)

- Insomnia

### Configuração do Ambiente

1. Na raiz do projeto, execute o seguinte comando para iniciar o Docker:

```
docker-compose up
```

Este comando cria o container e permite o uso do banco de dados PostgreSQL. O banco estará acessível na porta `5432`.

Você pode visualizar a aplicação na porta `8080`.

2. Dentro da pasta `api/api/`, execute os seguintes comandos:

```
yarn install
yarn migrate:dev
yarn dev
```

Isso instalará todas as dependências do projeto, iniciará as tabelas do Prisma no banco de dados PostgreSQL e executará o projeto na porta `3333`.

### Utilização da API

- Link da API local: [localhost:333/entradas](http://localhost:333/entradas)

### Função para Recuperar Todos os Dados em JavaScript

```javascript
fetch('http://localhost:3333/entradas/all')
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
```

### Função para Criar um Item em JavaScript

```javascript
const data = {
  "colesterol": 1,
  "description": "teste",
  "fibras": 1,
  "gorduraMonoinsaturadas": 1,
  "gorduraPolisaturadas": 1,
  "gorduraSaturada": 1,
  "name": "nomemclatura",
  "potassio": 1,
  "quantity": 1,
  "sodio": 1,
  "sugar": 1,
  "carboidrato": 1,
  "proteina": 1,
  "calorias": 1
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
```

### Função para Recuperar Item pelo Nome

```javascript
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
```

---

Com este guia, você pode configurar, executar e interagir com a API do Projeto X. Utilize as funções JavaScript fornecidas para recuperar e criar dados de forma eficiente.