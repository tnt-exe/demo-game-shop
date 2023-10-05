const dotenv = require('dotenv')
dotenv.config({ path: require('path').resolve(__dirname, '..', '.env') })

module.exports = {
    database: {
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DB,
        user: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        port: parseInt(process.env.SQL_PORT),
        options: {
        encrypt: false,
            trustServerCertificate: true
        }
    }
}

