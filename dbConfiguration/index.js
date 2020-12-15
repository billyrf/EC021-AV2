require('dotenv').config();

const URL = process.env.URL;

const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    dbName: process.env.dbNAME
};

module.exports = {
    URL,
    CONFIG
}