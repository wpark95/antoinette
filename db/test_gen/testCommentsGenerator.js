const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const {
  targetListingDataNum, addPadding, randomDate, randomNumber, randomTrueOrFalse,
} = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/commentsDataTest.csv');

// Write columns
writableStream.write('commentId,commenterName,commentBody,commentDate,commentLikeNum,postId\n', 'utf8');

// Create dummy comments generator

function * generateComments(targetNum) {
  let commentIndex = 1;
  const hasComments = randomTrueOrFalse();
  let commentSize = 0;
  let commentCounter = 0;
  let postID = 1;

  while (postID <= targetNum) {
    const commentId = commentIndex;
    const commenterName = name.firstName();
    const commentBody = lorem.paragraph(1);
    const commentDate = randomDate(new Date(2014, 0, 1), new Date());
    const commentLikeNum = randomNumber(0, 100);
    const postId = addPadding(postID);
    commentIndex += 1;
    if (hasComments) {
      commentSize = randomNumber(1, 5);
    }
    if (commentCounter < commentSize) {
      commentCounter += 1;
    }
    if (commentCounter === commentSize) {
      postID += 1;
      commentCounter = 0;
    }
    if (postID <= targetNum) {
      yield `${commentId},${commenterName},${commentBody},${commentDate},${commentLikeNum},${postId}\n`;
    }
  }
}

// Create readable stream
const readableStream = Readable.from(generateComments(targetListingDataNum), { encoding: 'utf8' });

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
