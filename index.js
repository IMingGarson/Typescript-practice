const express = require('express');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger-api-doc.json');
const app = express();
const apiRoute = require('./routes/api.js');
// const webRoute = require('./routes/web.js');

app.use(apiRoute);
// app.use(webRoute);
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
    console.log("Server is running!\nAPI documentation: http://localhost:3000/api-docs")
})