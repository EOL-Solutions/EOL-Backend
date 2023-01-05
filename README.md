# BACKEND

*Backend*

## Structure

Structure for this repo is based on microservices architecture, so this is the file system:

```
/
|
|- index.js
|- app.js
|- .env
|- /database
|  |
|  |- index.js
|  |
|  |- connection.js
|  |- /ContactInfo
|  |  |
|  |  |- index.js
|  |
|  |- /Transaction
|  |  |
|  |  |- index.js
|
|- /components
|  |
|  |- index.js
|  |
|  |- /GetContactInfo
|  |  |
|  |  |- index.js
|  |
|  |- /GetTransactions
|  |  |
|  |  |- index.js
|  |
|  |- /PaypalTransaction
|  |  |
|  |  |- index.js
|  |
|  |- /SendInfo
|  |  |
|  |  |- index.js
|  |
|  |- /StripeTransaction
|  |  |
|  |  |- index.js
|  |  |- test.js
|
|- /utils
|  |
|  |- index.js
|  |
|  |- /Middlewares
|  |  |
|  |  |- index.js
|  |
|  |- /SendEmail
|  |  |
|  |  |- index.js
|  |  |- email.js
|  |  |- htmlAuthentication.js
|  |  |- htmlVerification.js
```

- `index.js` is the main file and has all the global configuration for the backend.

- `app.js` is the core of the backend, it exports a function to create a new app ussing dependency injection for testing purpouses.

- `.env` is the environment variables file.

- `database` folder has all the database file's related. It has a `connection.js` file which defines the connection to the DB. Every table has their own folder and all methods are exposed with the `index.js` file. 

- Inside every `components` folder there is all the related files with that specific component (endpoints).

- `utils` is a folder with shared methods that can be used by any component.

---

## Enviroment Variables

There is a list of all enviroment variables used in this project and their description

| NAME     | TYPE   | DESCRIPTION                                      |
|:--------:|:------:|:------------------------------------------------:|
| PORT     | INT    | Port where the server will be listening          |
| DB_HOST  | STRING | Database host direction                          |
| DB_USER  | STRING | Database user with premission for read and write |
| DB_PASS  | STRING | Database password for Database user              |
| DB_NAME  | STRING | Database table name                              |
| EMAIL    | STRING | Email source                                     |
| PASS     | STRING | Password of the source email                     |
| USERDATA | STRING | Authentication user                              |
| PASSDATA | STRING | Authentication password                          |
| PRIVATE  | STRING | Secret for stripe module                         |

---

## Database Structure

This is the structure for the database in this project:


### contact_information

| NAME          | TYPE         | DESCRIPTION  |
|:-------------:|:------------:|:------------:|
| id            | int(11)      | PRIMARY KEY. |
| email         | varchar(255) | NOT NULL.    |
| country       | int(11)      | NOT NULL.    |
| name          | varchar(255) | NOT NULL.    |
| lastname      | varchar(255) | NOT NULL.    |
| address       | varchar(255) | NOT NULL.    |
| wallet        | varchar(255) | NOT NULL.    |
| city          | varchar(255) | NOT NULL.    |
| province      | int(11)      | NOT NULL.    |
| zipcode       | int(11)      | NOT NULL.    |
| phone         | int(11)      | NOT NULL.    |
| transactionID | int(11)      | NOT NULL.    |
| kyc_document  | varchar(255) | NULL.        |

### transactions

| NAME     | TYPE         | DESCRIPTION  |
|:--------:|:------------:|:------------:|
| id       | int(11)      | PRIMARY KEY. |
| token    | varchar(255) | NOT NULL.    |
| ref_code | varchar(255) | NULL.        |
| orderID  | varchar(255) | NULL.        |

### temp_amount_tracking

| NAME            | TYPE         | DESCRIPTION  |
|:---------------:|:------------:|:------------:|
| id              | int(11)      | PRIMARY KEY. |
| ref_code_temp   | varchar(255) | NOT NULL.    |
| amount          | varchar(255) | NOT NULL.    |
| currency        | varchar(255) | NOT NULL.    |

---

## Endpoints 

There are six endpoints


### /sendinfo

#### POST (/): { message, messageId }

**BODY PARAMS**
- email (required): String
- country (required): Int
- name (required): String
- lastname (required): String
- address (required): String
- wallet (required): String
- city (required): String
- province (required): Int
- phone (required): Int
- zipcode (required): Int
- phone (required): Int
- refCode (not required): String


### /paypaltransaction

#### POST (/): { message, messageId }

**BODY PARAMS**
- token (required): String
- orderID (required): String
- amount (required): Float
- currency (required): String


### /stripetransaction

#### POST(/): { message }

**BODY PARAMS**
- token (required): String
- orderID (required): String
- amount (required): Float
- currency (required): String


### /teststripe

#### POST(/): { message }

**BODY PARAMS**
- orderID (required): String
- amount (required): Float
- currency (required): String


### /getcontactinfo

#### POST(/): { results }

**BODY PARAMS**
- user (required): String
- pass (required): String


### /gettransactions

#### POST(/): { results }

**BODY PARAMS**
- user (required): String
- pass (required): String
