/* eslint-disable camelcase */
const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const {
  targetListingDataNum, randomDate, randomNumber, randomTrueOrFalse,
} = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/commentsDataTest.csv');

// Write columns
writableStream.write('comment_id,commenter_name,comment_body,comment_date,comment_like_num,post_id\n', 'utf8');

// Create dummy comments generator

function * generateComments(targetNum) {
  let commentIndex = 1;
  const hasComments = randomTrueOrFalse();
  let commentSize = 0;
  let commentCounter = 0;
  let postIdCounter = 1;

  while (postIdCounter <= targetNum) {
    commentIndex += 1;
    if (hasComments) {
      commentSize = randomNumber(1, 5);
    }
    if (commentCounter < commentSize) {
      commentCounter += 1;
    }
    if (commentCounter === commentSize) {
      postIdCounter += 1;
      commentCounter = 0;
    }
    const comment_id = commentIndex;
    const commenter_name = name.firstName();
    const comment_body = lorem.paragraph(1);
    const comment_date = randomDate(new Date(2014, 0, 1), new Date());
    const comment_like_num = randomNumber(0, 100);
    const post_id = postIdCounter;
    if (postIdCounter <= targetNum) {
      yield `${comment_id},${commenter_name},${comment_body},${comment_date},${comment_like_num},${post_id}\n`;
    }
  }
}

// Create readable stream
const readableStream = Readable.from(generateComments(targetListingDataNum), { encoding: 'utf8' });

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
