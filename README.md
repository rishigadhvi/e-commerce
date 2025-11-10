# MERN E-Commerce Project

---
#### Contents-
 + Techical architecture and ducmentation
 + Prompts made
---

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

## Prompts made-

```
Master Prompt to Start the Project:

"You are an expert Full-Stack Software Architect. Your task is to guide me through building a complete E-Commerce website based on a set of specific requirements.

Project Task: Create an E-Commerce Website that enables users to:

Explore products.

View product details.

Add products to a cart.

Core Requirements:

The site must have a clean and responsive UI.

It needs a lightweight backend to handle data operations.

It must have basic state management for the cart functionality.

Mandatory Tech Stack:

Frontend: React.js

Navigation: React Router

Backend: Node.js with Express.js

Database: MongoDB Atlas
```

```
Project Deliverables--
We will generate three artifacts:

Technical Architecture Documentation

The complete Code Base
```

```
# A list of all Prompts used during this process.

Crucial Instruction: You must keep a running log of every prompt I give you, starting with this one. At the end, you will provide this list as Deliverable 3.

Let's begin with Deliverable

1. Please generate the Technical Architecture Documentation. This should include:

A high-level overview of the MERN stack architecture.

The database schema for MongoDB (for 'products' and 'cart' collections).

A full list of REST API endpoints the backend will need (e.g., GET /api/products, POST /api/cart, etc.).

A breakdown of the required React components (e.g., ProductList, ProductDetails, Cart, Navbar)."

2. Iterative Prompts for the Code Base
After the AI provides the architecture document, you build the app piece-by-piece. Do not ask for "all the code." Ask for it in logical chunks.

Backend Prompts (Iterative):
"Great. Now let's start the Backend Code Base. Please provide the initial package.json file for the Node.js/Express server, including all necessary dependencies (like express, mongoose, cors)."

"Provide the code for the main server.js (or index.js) file to set up the Express server, connect to MongoDB Atlas, and include the API routes."

"Write the Mongoose model for the 'Product' schema we defined in the architecture."

"Now, create the Express router file for all product-related API endpoints (GET /api/products and GET /api/products/:id)."

(Continue this pattern for cart routes, user routes, etc.)

Frontend Prompts (Iterative):
"The backend structure looks good. Let's move to the Frontend Code Base. I'll use create-react-app. What is the command to install all the frontend dependencies we'll need (like react-router-dom and axios)?"

"First, provide the code for App.js to set up all the main routes using React Router (e.g., Home, Product Details, Cart)."

"Let's build the homepage. Write the code for the ProductList component. It should fetch data from our GET /api/products endpoint using useEffect and useState and display them."

"Now, write the code for the ProductDetails component. It should use the useParams hook from React Router to get the product ID, fetch data from GET /api/products/:id, and display the single product."

(Continue this pattern for the Cart, state management (e.g., Context API for the cart), and styling.)
```
