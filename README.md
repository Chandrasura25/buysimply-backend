# Backend for BuySimply Backend Test

This is the backend implementation for BuySimply Test, a web application for managing loans.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This backend server is built to support the BuySimply web application. It provides RESTful API endpoints for managing staff authentication and loan data.

## Features

- Staff authentication with JWT role-based authentication.
- CRUD operations for managing loans.
- Filtering loans based on various criteria such as status and maturity date.
- Secure routes accessible only by authorized staff members.

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication

## Setup

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables as needed.
4. Run the server using `npm start`.

## API Endpoints

- `/login`: POST request to authenticate staff and generate JWT token.
- `/logout`: POST request to clear staff's session (JWT token).
- `/loans`: 
  - GET request to fetch all loans.
  - GET request with query parameter `status` to filter loans by status.
- `/loans/:userEmail/get`: GET request to fetch loans of a specific user by their email.
- `/loans/expired`: GET request to fetch loans with expired maturity date.
- `/loan/:loanId/delete`: DELETE request to delete a loan data (accessible only by super admin).

## Usage

- Ensure you have set up the environment variables, especially the JWT secret.
- Start the server and access the API endpoints using a tool like Postman or integrate them into your frontend application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
