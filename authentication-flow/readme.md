project node

docker compose exec fc3-keycloak-node-authentication-flow-app bash

// init npm
npm init -y

// init typescript
npm i typescript@5.0.4 --save-dev
npx tsc --init

// watch server, auto reaload
npm i -D nodemon@2.0.22

// web server
npm i express@4.18.2
npm i -D @types/express@4.17.17

npm i -D ts-node@10.9.1

criar script start com ts-node para não precisar compilar typescript e nodemon para autoreload do server

---------
// "@types/express-session": "^1.17.7",
// "@types/jsonwebtoken": "^9.0.2",