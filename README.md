Aqui está um modelo de **README** para o seu projeto de API com autenticação JWT e CRUD de produtos utilizando MongoDB Atlas. Este arquivo inclui informações sobre como rodar a API, como usá-la e o que é necessário para configurá-la.

---

# API com Autenticação JWT e CRUD de Produtos

Este projeto implementa uma API simples com autenticação baseada em JWT (JSON Web Token) e operações de CRUD para produtos. A API é conectada ao MongoDB Atlas para armazenar dados.

## Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js**: [Node.js](https://nodejs.org/)
- **MongoDB Atlas**: Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para configurar o banco de dados.
- **Postman/Insomnia**: Ferramentas para testar as rotas da API.

## Instalação

Siga os passos abaixo para configurar e rodar a API:

1. Clone o repositório ou baixe os arquivos do projeto.

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd jwt-api
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
   JWT_SECRET=secrettoken123
   ```

   - Substitua `<username>` e `<password>` pela credenciais do seu MongoDB Atlas.
   - Substitua `mydb` pelo nome do banco de dados desejado.
   - `JWT_SECRET` é a chave secreta usada para criar e validar o token JWT. **Guarde-a com segurança.**

4. Rodar o servidor:

   ```bash
   node src/server.js
   ```

   O servidor estará rodando na porta `3000` por padrão.

---

## Como Usar

### 1. **Rota de Login**

Para fazer login e obter um token JWT, envie uma solicitação `POST` para:

- **Endpoint**: `/login`
- **Body (JSON)**:

   ```json
   {
     "username": "<seu_nome_de_usuario>",
     "password": "<sua_senha>"
   }
   ```

Se o login for bem-sucedido, a resposta será um token JWT que você usará para autenticar outras requisições.

Exemplo de resposta:

```json
{
  "token": "<jwt_token>"
}
```

---

### 2. **Operações CRUD com Produtos**

Após obter o token JWT, você deve incluí-lo no cabeçalho da solicitação em todas as rotas que requerem autenticação.

**Formato do cabeçalho**:

```text
Authorization: Bearer <jwt_token>
```

#### Criar Produto

- **Endpoint**: `POST /products`
- **Body (JSON)**:

   ```json
   {
     "name": "Produto Exemplo",
     "description": "Descrição do produto.",
     "price": 99.99
   }
   ```

   Cria um novo produto no banco de dados.

#### Obter Todos os Produtos

- **Endpoint**: `GET /products`

   Retorna todos os produtos cadastrados.

#### Obter Produto por ID

- **Endpoint**: `GET /products/:id`

   Substitua `:id` pelo ID do produto desejado para obter detalhes de um produto específico.

#### Atualizar Produto

- **Endpoint**: `PUT /products/:id` ou `PATCH /products/:id`
- **Body (JSON)**:

   ```json
   {
     "name": "Novo Nome",
     "description": "Nova Descrição",
     "price": 129.99
   }
   ```

   Atualiza um produto existente.

#### Deletar Produto

- **Endpoint**: `DELETE /products/:id`

   Deleta um produto específico pelo ID.

---

## Estrutura de Pastas

A estrutura do projeto é a seguinte:

```
jwt-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── productModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   └── server.js
├── .env
└── package.json
```

- **controllers**: Contém a lógica das rotas.
- **middleware**: Contém o middleware para validação do JWT.
- **models**: Contém os esquemas do MongoDB para o usuário e produto.
- **routes**: Define as rotas da API.
- **server.js**: Configuração do servidor Express e conexão com o MongoDB.

---

## Problemas Comuns

- **Erro de Conexão com o MongoDB**: Se você receber o erro `ENOTFOUND`, verifique se o DNS do MongoDB Atlas está correto e se o seu IP está autorizado a se conectar.
  
- **Erro de Token Inválido**: Se você receber um erro de token inválido, verifique se o token JWT foi gerado corretamente e está sendo passado nas requisições com o cabeçalho `Authorization`.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---