![KOACH](https://github.com/SystangoTechnologies/Koach/raw/master/static/koach.png)

## KOACH-Typescript
Production ready boilerplate for building APIs in [Typescript(3.4)](https://www.typescriptlang.org/) with [koa2](https://github.com/koajs/koa/), and using SQL database and http/2 as the communication protocol.


## Features
* Object oriented
* Typescript
* Authentication (JWT)
* http/2 support
* Sequelize ORM
* Doc generation with Swagger
* TS linting
* Dockerized Version

Please note, This boilerplate is for the API only application.

Visit `https://localhost:3000/` to access the root page.

## Requirements
* Node v10.16.0
* SQL Database (anyone MySQL, MariaDB, SQLite, PostgreSQL, MSSQL)
* Docker

## Environment Variables Configuration
To simulate environment variables
#### Dev environment *(use anyone)*
- src/resources/config/env.development.ts
- .env file

####  Production environment
- /etc/environment file

The environment variables are as follows -
```
NODE_ENV=production                                 // Environment development/production
SERVER_PORT=3000                                    // Server's Port
SESSION=secret_key                                  // secret-boilerplate-token
JWT_SECRET=token                                    // Jwt secret key
DB_HOST=host                                        // DB Host address
DB_PORT=3306                                        // DB Port number
DB_DIALECT=db                                       // DB (mysql, PostgreSQL, MySQL, etc)
DB_NAME=name                                        // DB name
DB_USER=user                                        // DB user name
DB_PASSWORD=password                                // DB password
```

## Installation
```bash
git clone https://github.com/SystangoTechnologies/Koach-Typescript.git
 
```

## Modules Used
* [koa2](https://github.com/koajs/koa)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-bodyparser](https://github.com/koajs/bodyparser)
* [koa-generic-session](https://github.com/koajs/generic-session)
* [koa-logger](https://github.com/koajs/logger)
* [koa-helmet](https://github.com/venables/koa-helmet)
* [koa-convert](https://github.com/koajs/convert)
* [http/2](https://github.com/molnarg/node-http2)
* [Swagger](https://github.com/swagger-api/)
* [grunt](https://github.com/gruntjs/grunt)
* [typescript](https://github.com/Microsoft/TypeScript)
* [dotenv](https://github.com/motdotla/dotenv)
* [winston](https://github.com/winstonjs/winston)
* [sequelize](https://github.com/sequelize/sequelize)
* [sequelize-cli-typescript](https://github.com/douglas-treadwell/sequelize-cli-typescript)
## Structure
```
│   .gitignore                                      // Standard git ignore file
|   .env                                            // dotenv configuration file for environment variable
│   docker-compose.yml                              // Standard docker compose file
│   Dockerfile                                      // Standard docker file
│   gruntfile.js                                    // Standard  gruntfile.js file
│   package.json                                    // Standard package.json file
│   README.md
│   tslint.json                                     // Standard tslint.json file
│
├───log                                             // logs directory
└───src                                             // source code
    │   .sequelizerc                                // Standarded sequlize config file
    │
    ├───app
    │   ├───constant                                // constants
    │   │       httpConstants.ts                    // http status code constant file
    │   │
    │   ├───controller                              // controller
    │   │       BookController.ts
    │   │
    │   ├───core
    │   │   │   RouterGenerator.ts                  // Generating all routes
    │   │   │   RouterManager.ts                    // Route depedency
    │   │   │
    │   │   └───middleware                          // middlewares
    │   │           ErrorMiddleware.ts 
    │   │           RequestValidator.ts             // request body validator
    │   │
    │   ├───db
    │   │   │   config.json
    │   │   │   DatabaseConfigurationManager.ts
    │   │   │
    │   │   ├───entity                              // entities
    │   │   |   ├───library
    │   │   |   │       book.ts                     // book entity
    │   │   |   │       index.ts
    │   │   |   │
    │   │   |   └───migrations                      // Migrations
    │   │   |       │   20190703135002-create-book.ts
    │   │   |       │
    │   │   |       └───compiled                    // compiled migrations
    │   │   |               20190703135002-create-book.js       
    │   │   |
    │   │   |
    │   │   └───repository                          // repository
    │   │          Book.ts        
    │   │   
    │   ├───model
    │   │       Book.ts                             // book model
    │   │ 
    │   ├───routes                                  // router
    │   │       BookRouter.ts
    │   │       index.ts
    │   │
    │   ├───service                                 // Service file for database
    │   │       BookService.ts
    │   │
    │   └───validation                              // validations
    │           BookValidator.ts
    │
    ├───logger                                      // logger file.
    │      index.ts
    │      LogManager.ts
    │
    ├───resources                                   // resources
    │   ├───config                                  //  configuration setting
    │   │       ConfigurationManager.ts
    │   │       env.common.ts
    │   │       env.development.ts
    │   │       index.ts
    │   │
    │	├───cert                                    // SSL certificates
    │	│      localhost.crt
    │	│      localhost.key
    │	│       
    │   └───swagger                                 // Swagger
    │
    └───server                                      // server
           server.ts
```


## Usage
* `npm run build` compile the typescripts in src folder
* `npm start` Starts the server on development mode in Typescript
* `npm run dev` Starts the server on development mode in Javascript
* `npm run grunt` Starts server using grunt file
* `docker-compose up -d` Starts the server for production 

## Running the server in Docker Container

Prerequisite For Docker Configuration: Docker and docker compose must be installed on the system.

Steps to run the app in a docker container :
  1. CD to project dir
  2. Create build using cmd: $ docker-compose build
  3. Start the server in daemon thread using cmd: $ docker-compose up -d 
  4. Stop the server using cmd: $ docker-compose down

## Documentation
The API documentation is written in Swagger (https://github.com/swagger-api/swagger-node#readme).

To view swagger API documentation

Visit [https://localhost:3000/swagger](https://localhost:3000/swagger) to view Swagger UI.

## Contributors

[Sparsh Pipley](https://www.linkedin.com/in/sparsh-pipley-6ab0b1a4/)

[Anurag Vikram Singh](https://www.linkedin.com/in/anuragvikramsingh/)

[Abhishek Parmar](https://www.linkedin.com/in/abhishek-parmar-19a875122/)

[Ayush Sharma](https://www.linkedin.com/in/ayush-sharma-40a520149)

## License
MIT.
