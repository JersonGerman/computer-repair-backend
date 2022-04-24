# computer-repair-backend

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to test the services deployed on your server.

###  APIS and available methods

### `users`
```plain
GET    | http://localhost:4000/api/v1/users
GET    | http://localhost:4000/api/v1/users/1
POST   | http://localhost:4000/api/v1/users   => {name, email, password, rol}
PATCH  | http://localhost:4000/api/v1/users/1 => {name, email}
DELETE | http://localhost:4000/api/v1/users
```

### `repairs`
```plain
GET    | http://localhost:4000/api/v1/repairs
GET    | http://localhost:4000/api/v1/repairs/1
POST   | http://localhost:4000/api/v1/repairs   => {date, userId}
PATCH  | http://localhost:4000/api/v1/repairs/1 => {name, email}
DELETE | http://localhost:4000/api/v1/repairs
```



