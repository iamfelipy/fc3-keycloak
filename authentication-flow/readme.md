### Projeto Node.js - Authentication Flow

#### Fluxos de Autenticação

- [Authorization Code Flow - backend](authorization-code-flow/readme.md)
- [Implicit Flow - frontend](authorization-code-flow/readme.md)
- [Hybrid Flow - frontend](hybrid-flow/README.md)
- [Resource Owner Password Credentials - backend](resource-owner-password-credentials/readme.md)


#### Como Rodar o Projeto

```bash
docker compose up
npm i 

# para o implicit/hybrid flow funcionar o client no keycloak precisa ter implicit flow ativado
```


#### Acessando o Container da Aplicação

```bash
docker compose exec -u root -it fc3-keycloak-node-authentication-flow-app bash
```

#### Comandos Úteis

```bash
# setup.sh

# Inicializar npm
npm init -y

# Instalar e configurar Typescript
npm i typescript@5.0.4 --save-dev
npx tsc --init

# Instalar Nodemon para auto-reload
npm i -D nodemon@2.0.22

# Instalar express e tipagens
npm i express@4.18.2
npm i -D @types/express@4.17.17

# Rodar server Typescript sem compilar manual
npm i -D ts-node@10.9.1

# Instalar tipagens e libs adicionais
npm i -D @types/express-session@1.17.7
npm i -D @types/jsonwebtoken@9.0.2
npm i express-session@1.17.3
npm i jsonwebtoken@9.0.0
```

---

#### 🛠️ Recomendações

- Instale a extensão do VS Code: **PlantUML**

---