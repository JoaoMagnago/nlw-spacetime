import 'dotenv/config';

import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import fastify from 'fastify';
import { authRoutes } from './routes/auth';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  origin: true, // all frontend urls that have access to the backend. Here some env variables might come in handy
});

app.register(jwt, {
  secret: 'spacetime',
});

app.register(authRoutes); // register auth routes directory
app.register(memoriesRoutes); // register separate routes directory

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333');
  });
