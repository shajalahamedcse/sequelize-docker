module.exports = {
    HOST: "65.1.107.216",
    USER: "root",
    PASSWORD: "12345",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}