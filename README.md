This is my Express + TypeScript + Prisma starter template.

## Tech stack

- Express
- TypeScript
- Prisma
- ESLint
- Prettier
- Jest
- SuperTest

## Usage

1. install packages

```
yarn
```

2. prisma init

```
yarn prisma:init
```

3. setting .env and schema.prisma

```
DATABASE_URL=****************
```

Please refer to [prisma document](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres) (Connect your database).

4. prisma migrate

```
yarn prisma:migrate
```

5. start server (development)

```
yarn dev
```

6. test

```
yarn test
```

7. build

```
yarn build
```

8. start server

```
yarn start
```
