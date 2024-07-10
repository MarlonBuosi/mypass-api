# App

Mypass: GymPass style app.

This API is made following SOLID principles, it has both Unit testing and E2E testing.

Endpoints Documentation:

Users Controller:
 - Register:
    Context:  Register an user on the database
    Method: POST
    URL: /register
    JSON Payload: {
      "email": "test@test.com",
      "name": "test",
      "password": "test"
    }
  
  - Profile:
    Context: Get a profile for a registered and authenticated user
    Method: GET
    URL: /me
    JSON Payload: None
  
  - Authenticate:
      Context: Authenticate an registered user
      Method: POST
      URL: /sessions
      JSON Payload: {
        "email": "test@test.com",
        "password": "123456"
      }

  - Refresh:
      Context: Refresh a Token
      Method: PATCH
      URL: /token/refresh
      JSON Payload: None

Gyms Controller:
  - Create:
      Context: Register a gym
      Method: POST
      URL: /gyms
      JSON Payload: {
        "title": "string",
        "description": "string",
        "phone": "string",
        "latitude": number,
        "longitude": number
      }

  - Nearby:
      Context: Return a gym nearby the coordinates
      Method: GET
      URL: /gyms/nearby
      JSON Payload: {
        "latitude": number,
        "longitude": number,
      }

  - Search:
      Context: Search gym by text, returns a pagination
      Method: GET
      URL: /gyms/search
      Query Parameter: q (query) as string, page as number

Check-In Controller:
  - Create:
      Context: Registers a check-in of a user in a gym
      Method: POST
      URL: /gyms/:gymId/check-ins
      JSON Payload: {
        "latitude": number
        "longitude": number
      }
  
  - Validate:
      Context: Validates a check-in
      Method: PATCH
      URL: /check-ins/:checkInId/validate
      JSON Payload: NONE

  - Metrics:
      Context: Get check-ins metrics
      Method: GET
      URL: /check-ins/metrics
      JSON Payload: NONE

  - History:
      Context: Get check-ins history
      Method: GET
      URL: /check-ins/history
      JSON Payload: NONE
      
## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
