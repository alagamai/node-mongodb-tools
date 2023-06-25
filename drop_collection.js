const  MongoClient = require('mongodb').MongoClient

const dbName = process.argv[2]
const collName = process.argv[3]
console.log(dbName);
console.log(collName)
const mongouri =
        `mongodb+srv://alagamai:Pass@cluster0.qirvbfz.mongodb.net/${dbName}`;

console.log(mongouri)
MongoClient.connect(mongouri,
	{
   useNewUrlParser: true,
   useUnifiedTopology: true
 },
 (err, client) => {
	if (err)
	   throw err;

	console.log("successfully connected to mongo db");
	var db = client.db(`${dbName}`)
	var col = db.collection(`${collName}`)
	col.drop((err, delOk) => {
	  if (err) 
		throw err;
	   if (delOk)
	   console.log("deleted successfully")
	  client.close();

	})
})


