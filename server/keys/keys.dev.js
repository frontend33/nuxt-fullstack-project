module.exports = {
    MONGO_URI: `mongodb+srv://admin33:admin33@nuxt-blog-2hher.mongodb.net/test?retryWrites=true&w=majority`,
    JWT: 'dev-jwt-key'
}



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin33:<password>@nuxt-blog-2hher.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
