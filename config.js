require('dotenv').config()
module.exports = {
    MONGO_URI: `mongodb://vakas:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.n9jnu.mongodb.net:27017,cluster0-shard-00-01.n9jnu.mongodb.net:27017,cluster0-shard-00-02.n9jnu.mongodb.net:27017/test?ssl=true&replicaSet=atlas-9rl9fw-shard-0&authSource=admin&retryWrites=true&w=majority`
}

