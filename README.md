# computer-repair-backend

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

###  `GET http://localhost:4000/api/v1/users`

###  `GET http://localhost:4000/api/v1/users/1`

## Users
###  `POST http://localhost:4000/api/v1/users`
```plain
{
    "name": "name",
    "email": "example@gmail.com",
    "password": "example",
    "rol": "client"
}
```

###  `PATCH http://localhost:4000/api/v1/users`
```plain
{
    "name": "other name",
    "email": "otherexample@gmail.com",
}
```
###  `DELETE http://localhost:4000/api/v1/users/1`




