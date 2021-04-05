/* eslint-disable camelcase */
const { Readable } = require('stream');
const fs = require('fs');
// const { lorem } = require('faker');
const {
  targetListingDataNum, randomTag, randomTrueOrFalse,
} = require('./dataHelperFunctions.js');

// :::::CSV Generator:::::
// Create writable stream
const writableStream = fs.createWriteStream('./db/test_gen/tagsDataTest.csv');

// Write columns
writableStream.write('tag_id,tag_type_id,tag_name,post_id\n', 'utf8');

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

    const tag_id = tagIndex;
    const tag_type_id = currentTag[0] + 1;
    const tag_name = currentTag[1];
    const post_id = postIndex;

    tagCounter += 1;
    tagIndex += 1;
    currentTag = randomTag();
    if (postIndex <= targetListingDataNum) {
      yield `${tag_id},${tag_type_id},${tag_name},${post_id}\n`;
    }
  }
}

// Create readable stream
const readableStream = Readable.from(generateTags(targetListingDataNum), { encoding: 'utf8' });

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
