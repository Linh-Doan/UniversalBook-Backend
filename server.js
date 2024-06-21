// This file is for things that are not related to express such as DB config, error handling, env variables etc
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const app = require('./app');
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})