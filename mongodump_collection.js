const { execSync } = require('child_process');

// Get the 'col' value from the command line arguments
const col = process.argv[2];
console.log(col)
try {
	execSync(
		`mongodump --collection=${col} --uri mongodb+srv://alagamai:Pass@cluster0.qirvbfz.mongodb.net/alagamai`
	);
	console.log('mongodump completed successfully');
} catch (error) {
	console.error('mongodump failed:', error);
	throw error;
}
