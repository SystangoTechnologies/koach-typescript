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
- config/env/ directory
- .env file

####  Production environment
- /etc/environment file

The environment variables are as follows -
```
NODE_ENV=production                 // Environment development/production
SERVER_PORT_NUMBER=3000             // Server's Port
SESSION=secret_key                  // secret-boilerplate-token
JWT_SECRET=token                    // Jwt secret key
DB_HOST=host 						// DB Host address
DB_PORT=3306						// DB Port number
DB_DIALECT= db						// DB (mysql, PostgreSQL, MySQL, etc)
DB_NAME=name                        // DB name
DB_USER=user				        // DB user name
DB_PASSWORD=password				// DB password
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
* [MongoDB](http://mongodb.org/)
* [Mongoose](http://mongoosejs.com/)
* [http/2](https://github.com/molnarg/node-http2)
* [Passport](http://passportjs.org/)
* [Nodemon](http://nodemon.io/)
* [Mocha](https://mochajs.org/)
* [apidoc](http://apidocjs.com/)
* [Babel](https://github.com/babel/babel)
* [ESLint](http://eslint.org/)
* [PM2](https://github.com/Unitech/pm2/)
* [Swagger](https://github.com/swagger-api/)

## Structure
```
|   .gitignore              		// Standard git ignore file
│   .env                    		// dotenv configuration file for environment variable
│   docker-compose.yml     			// Standard docker compose file 
│   Dockerfile            			// Standard docker file
│   gulpfile.js      				// Standard  gulpfile.js file
│   package.json        			// Standard package.json file
│   tsconfig.json      				// Standard tsconfig.json file
│   tslint.json      				// Standard tslint.json file
│
├───cert      						// SSL certificates
│       localhost.crt
│       localhost.key
│
├───logs     						// logs directory
├───src     						// source code
│   │   .sequelizerc     			// Standarded sequlize config file
│   │
│   ├───app
│   │   ├───api     					// APIs
│   │   │   │   RouterGenerator.ts  	// Generating all routes
│   │   │   │
│   │   │   ├───common
│   │   │   │   │   index.ts 
│   │   │   │   │
│   │   │   │   └───home
│   │   │   │           controller.ts 	// Controller
│   │   │   │           router.ts 		// Router
│   │   │   │
│   │   │   ├───v1   					// Version 1 of APIs  
│   │   │   │       index.ts
│   │   │   │
│   │   │   └───v2						// Version 2 of APIs  
│   │   │           index.ts
│   │   │
│   │   ├───core 						// Dependency Files .
│   │   │       RouterManager.ts		// Route depedency
│   │   │
│   │   ├───db
│   │   │   │   DatabaseConfigurationManager.ts			// Database Config
│   │   │   │
│   │   │   ├───migrations 								// Migrations .
│   │   │   │   │   20190624110733-create-user.ts
│   │   │   │   │
│   │   │   │   └───compiled 							// compiled migrations
│   │   │   │           20190624100830-create-student.js
│   │   │   │
│   │   │   ├───models 									// Models 
│   │   │   │       index.ts 							// Loads models
│   │   │   │       student.ts							// Student model
│   │   │   │
│   │   │   └───seeders
│   │   ├───middleware 									// Middlewares.
│   │   │       index.ts
│   │   │
│   │   ├───service 									// Service file for database
│   │   └───utils 										// utility files
│   ├───config
│   │   │   config.json
│   │   │   ConfigurationManager.ts 					//  configuration setting
│   │   │   index.ts
│   │   │
│   │   └───env // Environments config
│   │           common.ts 								// common varibles
│   │           development.ts 							// development variables.
│   │
│   ├───logger 											// logger file.
│   ├───server
│   │       server.ts 									// server
│   │
│   └───testcases 										// Test cases
├───swagger 											// Swagger documentation file for APIs
│       favicon-16x16.png
│       favicon-32x32.png
│       index.html
│       oauth2-redirect.html
│       swagger-ui-bundle.js
│       swagger-ui-bundle.js.map
│       swagger-ui-standalone-preset.js
│       swagger-ui-standalone-preset.js.map
│       swagger-ui.css
│       swagger-ui.css.map
│       swagger-ui.js
│       swagger-ui.js.map
│       swagger.json
│       swagger.yaml
│
└───tasks 												// Gulp task
        nodemon.js
        trranspile.js
		yaml2json.js
```


## Usage
* `npm start` Starts the server on development mode in Typescript
* `npm run dev` Starts the server on development mode in Javascript
* `gulp dev` Starts server using gulp task
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

[Abhishek Parmar](https://www.linkedin.com/in/abhishek-parmar-19a875122/)

[Anurag Vikram Singh](https://www.linkedin.com/in/anuragvikramsingh/)

## License
MIT.
