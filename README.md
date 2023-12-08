# Project Name

## [See the App!](https://bk-mern-projekt.netlify.app/)

## Description

**NOTE -** Bayerische Küche apart from being a specific service to share the richness of Bavarian food, focuses on offering a reservation service in the restaurant, allowing for better organisation and customer service.
#### [Client Repo here](https://github.com/dmonzon4/mern-bk-client.git)
#### [Server Repo here](https://github.com/dmonzon4/mern-bk-server.git)

## Backlog Functionalities

**NOTE -** The functionality to receive confirmation by email can be implemented by finding a suitable service for that purpose.

## Technologies used

**NOTE -** Used technologies in this proyect: 
- HTML
- CSS
- Javascript
- Axios
- React Context
- Mongoose
- MongoDB
- Express
- React
- Node
- React-router-dom
- React-spinners

# Server Structure

## Models

User model

```javascript
username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
```

Reservation model

```javascript
 user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    reservedArea: {
      type: Schema.Types.ObjectId,
      ref: 'Area', // Reference to the Restaurant Area model
      required: true,
    },
    reservationDate: {
      type: Date,
      required: true,
    },
	  reservationTime: {
      type: String, 
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
    },
```

Product model

```javascript
 name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['food', 'drink'],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
```

Area model

```javascript
 name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
```


## API Endpoints (backend routes)

| HTTP Method | URL                                            | Request Body                                                             | Success status | Error Status | Description                                       |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------- |
| POST        | `/auth/signup`                                 | {name, email, password}                                                  | 201            | 400          | Registers the user in the Database                |
| POST        | `/auth/login`                                  | {username, password}                                                     | 200            | 400          | Validates credentials, creates and sends Token    |
| GET         | `/auth/verify`                                 |                                                                          | 200            | 401          | Verifies the user Token                           |
| GET         | `/api/reservations`                            |                                                                          | 200            | 400          | Get all reservations                              |
| POST        | `/api/reservations`                            | {user, reservedArea, reservationDate, reservationTime, numberOfPeople}   | 201            | 400          | Create a new reservation                          |
| GET         | `/api/reservations/:reservationId`             |                                                                          | 200            | 400          | Get details of a reservation by ID                |
| DELETE      | `/api/reservations/:reservationId`             |                                                                          | 200            | 400          | Delete a specific reservation by ID               |
| PUT         | `/api/reservations/:reservationId`             | {user, reservedArea, reservationDate, reservationTime, numberOfPeople}   | 200            | 401          | Fully update an existing reservation by ID        |
| GET         | `/api/products`                                |                                                                          | 200            | 401          | Get all products                                  |
| POST        | `/api/products`                                | {name, price, category, image}                                           | 201            | 400          | Create a new product                              |
| GET         | `/api/products/:productId`                     |                                                                          | 200            | 401          | Get details of a product by ID                    |
| DELETE      | `/api/products/:productId`                     |                                                                          | 200            | 401          | Delete a specific product by ID                   |
| PUT         | `/api/products/:productId`                     | {name, price, category, image}                                           | 200            | 401          | Fully update an existing product by ID            |
| GET         | `/api/areas`                                   |                                                                          | 200            | 401          | Get all areas                                     |
| POST        | `/api/areas`                                   | {name, image}                                                            | 201            | 401          | Create a new area                                 |
| GET         | `/api/areas/:areaId`                           |                                                                          | 200            | 401          | Get details of an area by                         |
| DELETE      | `/api/areas/:areaId`                           |                                                                          | 200            | 401          | Delete a specific area by                         |
| PUT         | `/api/areas/:areaId`                           | {name, image}                                                            | 200            | 401          | Fully update an existing area by ID               |
  
## Links

### Developer

[Developer: Diego Monzon](https://github.com/dmonzon4)

### Project

[Repository Link Client](https://github.com/dmonzon4/mern-bk-client.git)

[Repository Link Server](https://github.com/dmonzon4/mern-bk-server.git)

[Deploy Link](https://bk-mern-projekt.netlify.app/)

### Excalidraw

<!-- [Link ]()

### Slides

[Slides Link](www.your-slides-url-here.com) -->