// ***** Dependencies *****
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const path = require('path');
require('dotenv').config();
// const AWS = require('aws-sdk');

// ***** Express *****
const app = express();
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200,
// }; // CORS options
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
// const uploadFolder = path.join(__dirname, '..', 'client', 'dist', 'uploadedImages');

// app.use(cors(corsOptions)); // This lets us use CORS options set above
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ***** S3 *****
// const AWSBucket = process.env.AWS_S3_BUCKET;
// const AWSKeyID = process.env.AWS_S3_KeyId;
// const AWSKey = process.env.AWS_S3_Key;
// const AWSRegion = process.env.AWS_S3_region;
// const AWSACL = process.env.AWS_S3_ACL;

// const s3bucket = new AWS.S3({
//     accessKeyId: AWSKeyID,
//     secretAccessKey: AWSKey,
//     region: AWSRegion
// });

// const uploadParams = {
//     Bucket: AWSBucket,
//     Key: '',
//     Body: '',
//     ContentEncoding: '',
//     ContentType: '',
//     ACL: AWSACL
// };

// let imageFileInfo = {
//     num: '',
//     ext: '',
// };

module.exports = app;