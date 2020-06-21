## 1. Intro

- **Project Name :** Trello Clone

- **Introduction :** 트렐로 클론을 통한 공부와 React / Prisma / Graphql 사용하여 Full-stack 개발에 익숙해지기 위한 프로젝트입니다.

## 2. Project

**_Stack :_**
​
​
**Server :**
​

- Node.js / Prisma / Graphql / Passport-jwt / Multer-s3 /
  ​

**_Setup :_**

- **Installing :** Please install with:

```js
npm(yarn) install
```

- **Running the program :**
  To run this server in your local setting, you will have to first create a Prisma account at: https://www.prismaio.com/

In the terminal, try to run:

```js
prisma init
```

You will most likely get an error message saying there might be a conflict with some files. The simplest way is to copy those files' contents, erase the file, and run 'prisma init' again. The files will re-emerge but empty. Paste the contents back into them.
Once done, please run:

```js
prisma deploy
prisma generate
```

This will create a service within your server and you can check out the database under the service tab.
You will also have to create a .env file in the project directory and add these variables with your own secrets:

You can start the server with:

```js
npm(yarn) run dev
```
