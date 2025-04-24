# Passport Authentication App

This project is an Express.js application that implements user authentication using Passport.js. It features local authentication with email and password, session management, and access control for protected routes.

## Project Structure

```
passport-auth-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── passport.js       # Passport configuration for local authentication
│   ├── controllers
│   │   └── authController.js  # Handles user registration, login, and logout
│   ├── middleware
│   │   └── authMiddleware.js   # Middleware to protect routes
│   ├── models
│   │   └── user.js            # User model definition
│   ├── routes
│   │   ├── auth.js            # Routes for authentication
│   │   └── protected.js       # Protected route requiring authentication
│   ├── views
│   │   ├── index.ejs          # Main view for the home page
│   │   ├── login.ejs          # Login form view
│   │   └── protected.ejs      # View for authenticated users
├── package.json                # npm configuration file
├── .env                        # Environment variables
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd passport-auth-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Copy the `.env.example` to `.env` and set the required environment variables, such as `SESSION_SECRET`.

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate to the home page to find links for logging in and registering.
- Use the login form to authenticate users.
- Access the protected route after logging in successfully.

## License

This project is licensed under the MIT License.