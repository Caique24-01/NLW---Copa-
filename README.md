## 💻 Projeto NLW COPA 

Aplicação para participar de bolões da Copa do Mundo 2022.

## ✨ Tecnologia

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- E muitas outras…

 ## 🚀 Como executar o Backend:

- Instale os pacotes com `npm install`.
- Faça uma copia do arquivo `.env.example` para `.env` e altere caso necessário.
- Execute `npx prisma migrate dev` para rodar as migrations. (Esse comando também já vai executar as seeds)
- Execute `npm run dev` para iniciar o servidor.

## 🚀 Como executar Web:

**Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando.**

- Instale os pacotes com `npm install`.
- Execute `npm run dev` para iniciar o cliente web.

## 🚀 Como executar Mobile:

**Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando.**

- Instale os pacotes com `npm install`.
- Criar o app no google para poder ter acesso ao OAuth (<https://docs.expo.dev/guides/authentication/#google>)
- Faça uma copia do arquivo `.env.example` para `.env` e preencha corretamente.
- Alterar o endereço do arquivo `src/services/api.ts` colocando o IP da máquina.
- Execute `npm run dev` para iniciar o servidor do Expo.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout](https://www.figma.com/community/file/1169028343875283461)

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).
