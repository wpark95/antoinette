/* eslint-disable camelcase */
const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const { targetListingDataNum, randomNumber } = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/postsDataTest.csv');

// Write columns
writableStream.write('post_id,post_type,username,title,left_game,right_game,like_num,view_num\n', 'utf8');

// Create dummy reviews generator
function * generateReviews(targetNum) {
  // let reviewsIdCounter = 0;
  for (let i = 1; i <= targetNum; i += 1) {
    const post_id = i;
    const post_type = 'text';
    const username = name.firstName();
    const title = lorem.sentence(1);
    const left_game = lorem.sentence(5);
    const right_game = lorem.sentence(5);
    const like_num = randomNumber(0, 50);
    const view_num = randomNumber(1, 500);
    yield `${post_id},${post_type},${username},${title},${left_game},${right_game},${like_num},${view_num}\n`;
  }
}

// Create readable stream
const readableStream = Readable.from(generateReviews(targetListingDataNum), { encoding: 'utf8' });

// Pipe data into writable stream
readableStream.pipe(writableStream);
