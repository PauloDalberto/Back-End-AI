import Fastify from "fastify";
import cors from '@fastify/cors';
import dotenvt from 'dotenv';
import { routes } from './routes'

const app = Fastify({ logger: true });
dotenvt.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({ port: 3333, host: '0.0.0.0' });
    console.log('servidor rodando na porta 3333')
  } catch (err) {
    console.log("erro:", err)
  }
}

start();