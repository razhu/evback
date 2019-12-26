## Building REST API in Node/Express App using Sequelize,Postgres

This Repository is building REST API Design in Node/Express App using Sequelize and Postgres.

### PreRequisites
- [Postgres](https://www.postgresql.org/download/)
- [Node](https://nodejs.org/en/download/)

### Setup
```
 $ npm install
```


Create a Database `testdb` in Postgres Dashboard

Edit file server/config/config.json

Ejecutar
```
$ node_modules/.bin/sequelize db:migrate      
```


#### To Run Application

```
$ node index.js
```