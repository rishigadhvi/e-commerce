# MERN E-Commerce Project

## Technical Architecture Overview
This project follows the MERN stack architecture, which includes:
- **MongoDB**: A NoSQL database used to store product and cart information.
- **Express.js**: A web application framework for Node.js that provides a robust set of features for web and mobile applications.
- **React.js**: A JavaScript library for building user interfaces, particularly single-page applications where you can create reusable UI components.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used to build the backend of the application.

The client communicates with the server through RESTful API endpoints, and the server interacts with the MongoDB database to perform CRUD operations.

## MongoDB Database Schema
### Products Collection
- **_id**: ObjectId
- **name**: String
- **description**: String
- **price**: Number
- **imageUrl**: String
- **category**: String
- **stock**: Number

### Cart Collection
- **_id**: ObjectId
- **userId**: ObjectId
- **items**: Array of Objects
  - **productId**: ObjectId
  - **quantity**: Number

## REST API Endpoints
- **GET /api/products**: Retrieve all products
- **GET /api/products/:id**: Retrieve a single product by ID
- **POST /api/cart**: Add items to the cart
- **GET /api/cart/:userId**: Retrieve the cart for a specific user
- **DELETE /api/cart/:userId**: Clear the cart for a specific user

## React Components Breakdown
- **ProductCard.jsx**: Displays individual product information.
- **ProductList.jsx**: Renders a list of products.
- **CartItem.jsx**: Displays individual items in the cart.
- **Header.jsx**: Navigation bar for the application.
- **Footer.jsx**: Footer section of the application.
- **Home.jsx**: Main landing page displaying products.
- **ProductPage.jsx**: Detailed view of a selected product.
- **Cart.jsx**: Displays the user's cart.
- **Checkout.jsx**: Handles the checkout process.
- **CartContext.jsx**: Provides context for cart state management.
- **api.js**: Contains functions for making API calls.
- **useAuth.js**: Custom hook for authentication logic.
- **main.css**: Styles for the application.

## Project Tree Structure
- **client**: Contains the React frontend application.
- **server**: Contains the Node.js backend application.
- **docker-compose.yml**: Configuration for Docker services.
- **.gitignore**: Specifies files to ignore in version control.
- **README.md**: Documentation for the project.