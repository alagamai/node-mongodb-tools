const { execSync } = require('child_process');

// Get the 'col' value from the command line arguments
const collName = process.argv[2];
const mongouri =
	'mongodb+srv://alagamai:Pass@cluster0.qirvbfz.mongodb.net/alagamai';
try {
	execSync(
		`mongoexport --collection=${collName} --uri=${mongouri} --out="out/mongoexport-customer.json"`
	);
	console.log('mongo export all fields completed successfully');
} catch (error) {
	console.error('mongo export all fields failed:', error);
}
