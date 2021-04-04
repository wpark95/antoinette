CREATE DATABASE antoinette;
\c antoinette taebong;
CREATE SCHEMA antoinette;
SET search_path TO antoinette;

CREATE TABLE posts (
  id SERIAL,
  paddedId VARCHAR(10) NOT NULL,
  username VARCHAR(255) NOT NULL,
  title VARCHAR(20) NOT NULL,
  leftGame VARCHAR(150) NOT NULL,
  rightGame VARCHAR(150) NOT NULL,
  likeNum SMALLINT NOT NULL,
  viewNum SMALLINT NOT NULL,
  UNIQUE(paddedId)
);

CREATE TABLE comments (
  commentId SERIAL,
  commenterName VARCHAR(255) NOT NULL,
  commentBody VARCHAR(1000) NOT NULL,
  commentDate VARCHAR(255) NOT NULL,
  commentLikeNum SMALLINT NOT NULL,
  postId VARCHAR(10) NOT NULL REFERENCES posts(paddedId)
);

CREATE TABLE tags (
  tagId SERIAL,
  tagTypeNum BIGINT,
  tagName VARCHAR(30),
  postId VARCHAR(10) NOT NULL REFERENCES posts(paddedId)
);

\COPY posts (id,paddedId,username,title,leftGame,rightGame,likeNum,viewNum) FROM '/Users/taebong/Desktop/antoinette/db/test_gen/postsDataTest.csv' DELIMITER ',' CSV HEADER;

\COPY comments (commentId,commenterName,commentBody,commentDate,commentLikeNum,postId) FROM '/Users/taebong/Desktop/antoinette/db/test_gen/commentsDataTest.csv' DELIMITER ',' CSV HEADER;

\COPY tags (tagId,tagTypeNum,tagName,postId) FROM '/Users/taebong/Desktop/antoinette/db/test_gen/tagsDataTest.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE posts ADD PRIMARY KEY (id);

ALTER TABLE comments ADD PRIMARY KEY (commentId);

ALTER TABLE tags ADD PRIMARY KEY (tagId);

CREATE INDEX comments_postId_idx ON comments (postId);

CREATE INDEX tags_postId_idx ON tags (tagId);

CREATE INDEX posts_paddedId_idx ON posts (paddedId);