# Keycloak
Servidor de identidade e autorização

## Objetivos Práticos

- OpenID Connect
- OAuth 2.0
- Permissões, papéis, grupos
- Fluxos de autenticação e autorização, atores

---

## Principais Casos de Uso do Keycloak

1. **Single Sign-On (SSO)**
2. **Proteção de API**
3. **Gerenciamento de usuários**
4. **Autenticação multifator**
5. **Integração com diferentes sistemas**
6. **Gerenciamento de sessão**
7. **Autorização baseada em papéis**

---

## Requisitos para Teste

- Docker

```bash
cd ./keycloak
docker compose up
```

Acesse o Keycloak em: [http://localhost:8080/](http://localhost:8080/)

Credenciais padrão:
- Usuário: `admin`
- Senha: `admin`

---

## Fluxo de Teste

### Criar Usuário

- Pode adicionar atributos
- Resetar senha
- Configurar consentimentos de provedores de identidade

### Configurar SMTP para envio de e-mail

1. Configurar Realm
2. Testar envio pelo [Mailtrap](https://mailtrap.io/)
3. Habilitar StartTLS
4. Admin precisa possuir e-mail cadastrado

Configuração Mailtrap:
- Host: `sandbox.smtp.mailtrap.io`
- Porta: `2525`
- Usuário: `b2e0ed825ea6a3`
- Senha: 

---

### Gerenciamento de Realms

- Criar usuário
- Atribuir roles
- Gerenciar clients

---

### Criação de Client

- Gerar access tokens

---

## Conferir Persistência do Usuário no Banco de Dados

```bash
docker compose exec -it fc3-keycloak-db bash
mysql -uroot -p
# Digite a senha: root

show databases;
use keycloak;
show tables;
select * from USER_ENTITY;
```