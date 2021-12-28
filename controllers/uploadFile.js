const { s3Client } = require("./sampleClient");


const params = {
  Bucket: process.env.BUCKET
};

const run = async (document) => {

  try {
    params.Body = document.data
    params.Key = document.name
    const results = await s3Client.upload(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } if (data) {
        console.log("Upload Success", data.Location);
      }
    });
    return results; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
module.exports = {run}