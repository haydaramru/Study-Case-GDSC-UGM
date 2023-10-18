import express from 'express'
import { db } from '../config/db.config'
import { router } from '../routes/posts.routes'
import SwaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

//swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Study Case GDSC UGM',
        version: '1.0.0',
        description: 'This project is a part of study case assignment from Google Developer Students Club UGM that contains a backend API for managing post using Express.js and MongoDB. You can do CRUD operation for posts (tweets) feature from X (formerly Twitter).',
        contact: {
            name: 'Haydar Amru Revanda',
            url: 'https://github.com/haydaramru',
        },
    },
    servers: [
        {
            url: 'http://localhost:7070',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express()

app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/v1/posts', router)

//db connection then server connection
db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})