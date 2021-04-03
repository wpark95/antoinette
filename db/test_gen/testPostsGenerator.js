const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const { targetListingDataNum, addPadding, randomNumber } = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/postsDataTest.csv');

// Write columns
writableStream.write('id,paddedId,username,title,leftGame,rightGame,likeNum,viewNum\n', 'utf8');

// Create dummy reviews generator
function * generateReviews(targetNum) {
  // let reviewsIdCounter = 0;
  for (let i = 1; i <= targetNum; i += 1) {
    const id = i;
    const paddedId = addPadding(i);
    const username = name.firstName();
    const title = lorem.sentence(1);
    const leftGame = lorem.sentence(5);
    const rightGame = lorem.sentence(5);
    const likeNum = randomNumber(0, 50);
    const viewNum = randomNumber(1, 500);
    yield `${id},${paddedId},${username},${title},${leftGame},${rightGame},${likeNum},${viewNum}\n`;
  }
}

// Create readable stream
const readableStream = Readable.from(generateReviews(targetListingDataNum), { encoding: 'utf8' });

// Pipe data into writable stream
readableStream.pipe(writableStream);
