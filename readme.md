# keycloak + OAuth 2.0 + OIDC
#### Aprendendo a usar o Keycloak: [readme-keycloak.md](./readme-keycloak.md)
#### Testando diferentes fluxos de autenticação/autorização com Node.js: [readme.md](./authentication-flow/readme.md)

### Como rodar o projeto

Para executar o ambiente completo, utilize `docker compose up` nos diretórios `keycloak` e `authentication-flow` separadamente.  

```bash
# Iniciar o Keycloak:
cd keycloak
docker compose up

# Em outro terminal, iniciar a aplicação Node:
cd authentication-flow
docker compose up
```

Isso garantirá que tanto o Keycloak quanto a aplicação de autenticação estejam rodando corretamente em containers separados.