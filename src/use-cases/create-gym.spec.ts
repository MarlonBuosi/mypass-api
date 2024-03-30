import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

// Test unitario NUNCA toca em banco de dados, nem em camadas externas da aplicacao

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: '',
      description: null,
      phone: '32361473',
      latitude: 25.401802,
      longitude: -49.2014548,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
