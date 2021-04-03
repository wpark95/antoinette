const { Readable } = require('stream');
const fs = require('fs');
// const { lorem } = require('faker');
const {
  targetListingDataNum, addPadding, randomTag, randomTrueOrFalse,
} = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/tagsDataTest.csv');

// Write columns
writableStream.write('tagId,tagTypeNum,tagName,postId\n', 'utf8');

// Create dummy tags generator
function * generateTags(targetDataNum) {
  let tagTracker = [];
  let postIndex = 1;
  let currentTag = randomTag();
  let tagCounter = 0;
  let tagIndex = 1;

  while (postIndex <= targetDataNum) {
    if (tagTracker.includes(currentTag[0])) {
      postIndex += 1;
      tagCounter = 0;
      tagTracker = [];
    }
    if (!randomTrueOrFalse() && tagCounter !== 0) {
      postIndex += 1;
      tagCounter = 0;
      tagTracker = [];
    }
    tagTracker.push(currentTag[0]);

    const tagId = tagIndex;
    const tagTypeNum = currentTag[0] + 1;
    const tagName = currentTag[1];
    const postId = addPadding(postIndex);
    tagCounter += 1;
    tagIndex += 1;
    currentTag = randomTag();
    if (postIndex <= targetListingDataNum) {
      yield `${tagId},${tagTypeNum},${tagName},${postId}\n`;
    }
  }
}

// Create readable stream
const readableStream = Readable.from(generateTags(targetListingDataNum), { encoding: 'utf8' });

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
