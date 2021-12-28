/* const { S3Client } = require("@aws-sdk/client-s3");*/
const AWS = require("aws-sdk")

const config = {
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
}
// Set the AWS Region.
/* const REGION = process.env.REGION; */ //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new AWS.S3(config);
module.exports = { s3Client };