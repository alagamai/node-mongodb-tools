const { execSync } = require('child_process');

// Get the 'col' value from the command line arguments
const dbName = process.argv[2];
const collName  = process.argv[3];
console.log(dbName)
console.log(collName)
const fileName = 'mongoexport-' +  `${collName}` 
console.log(fileName)
const mongouri = `mongodb+srv://alagamai:Pass@cluster0.qirvbfz.mongodb.net/${dbName}`;


try {
	execSync(
		`mongoimport --uri ${mongouri} --db ${dbName} --collection ${collName} --file "out/${fileName}.json"`
	);
	console.log('mongo import all fields completed successfully');
} catch (error) {
	console.error('mongo import all fields failed:', error);
}
