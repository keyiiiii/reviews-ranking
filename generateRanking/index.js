const reviews = JSON.parse(process.argv[2]);

const ranking = require('./parser')(reviews);
const rankingWithLineBreakCodes = ranking.replace(/\n/g, '\\n');

console.log(rankingWithLineBreakCodes);
