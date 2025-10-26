# Node.js Sample Application

This is a sample Node.js application that demonstrates the use of Express.js for building a web server. 

## Project Structure

```
node_app
├── src
│   ├── app.js
│   ├── routes
│   │   └── index.js
│   └── controllers
│       └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd node_app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be running on `http://localhost:3000`.

## Routes

- `GET /` - This route is handled by the IndexController's getIndex method.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.