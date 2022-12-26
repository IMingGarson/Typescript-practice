const swaggerAutogen = require('swagger-autogen')();
// Swagger API Doc configuration
const outputFile = './swagger-api-doc.json';
// API Endpoint File
const endpointsFiles = ['../index.js'];

swaggerAutogen(outputFile, endpointsFiles);