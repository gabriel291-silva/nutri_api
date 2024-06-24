import express from 'express';
import cors from 'cors';
import { routes } from './Routes/index';

const app = express();

// Configurar o middleware CORS
app.use(cors());

// Configurar o middleware para parsear JSON
app.use(express.json());

// Usar as rotas definidas
app.use(routes);

// Iniciar o servidor
app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
