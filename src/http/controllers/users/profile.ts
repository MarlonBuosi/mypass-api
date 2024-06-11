import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

// CONTROLLER: lida com a parte de receber a requisicao e devolver uma resposta, geralmente esta associado a framework

// basic auth: manda informacoes sensiveis apartir do header da aplicacao, nao e muito usado pela questao de nao ser seguro ficar transitando informacoes pelo header a todo momento
// caso um malware faca a interceptacao desses dados, havera uma falha de seguranca

// JWT: JSON Web Token, quando o usuario faz login pela rota de login, ele envia o email e senha dele pro backend, ocorre uma validacao pra checar, quando essa validacao der positivo o backend gera um token unico e stateless
// Stateless: Nao armazenado em nenhuma estrutura de persistencia de dados (banco de dados)
// Para o backend validar esse token novamente, e criado uma palavra chave
// quando o backend receber o emaile senha e verificar que sao reais, o backend cria um hash(palavra chave) que pode ser descriptografado
// geralmente e um composto entre tres coisas: header,payload e assinatura

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase()

  const { user } = await getUserProfile.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}
