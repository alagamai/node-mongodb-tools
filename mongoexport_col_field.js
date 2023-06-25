const { execSync } = require('child_process');

// Get the 'col' value from the command line arguments
const col = process.argv[2];
const fields = process.argv[3];
console.log(col)
console.log(fields)
let fileName = 'mongoexport-' + `${col}` + '-' + `${fields}`

const mongouri =
	'mongodb+srv://alagamai:Pass@cluster0.qirvbfz.mongodb.net/alagamai';
try {
	execSync(
		`mongoexport --collection=${col} --fields=${fields} --type=csv --uri=${mongouri} --out="out/${fileName}.csv"`
	);
	console.log('mongo export all fields completed successfully');
} catch (error) {
	console.error('mongo export all fields failed:', error);
}
