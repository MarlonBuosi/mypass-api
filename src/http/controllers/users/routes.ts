import { authenticate } from './authenticate'
import { profile } from './profile'
import { register } from './register'
import { FastifyInstance } from 'fastify'
import { verifyJWT } from '../../middlewares/verify-jwt'
import { refresh } from './refresh'

// traduza as rotas para entidades:
// n use authenticate por exemplo, use sessions

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
