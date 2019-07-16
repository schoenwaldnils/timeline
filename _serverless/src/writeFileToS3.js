const S3 = require('aws-sdk/clients/s3');


const {
  aws: {
    region,
    s3: { bucket },
  },
} = require('../config.json');

const s3 = new S3({
  apiVersion: '2006-03-01',
  region,
});

function getKeyName(folder, filename) {
  return folder + '/' + filename;
}

module.exports = async (content, intl) => {
  const folder = 'timelineData';
  const filename = `timelineData-${intl}.json`;
  const keyName = getKeyName(folder, filename);
  const body = JSON.stringify(content);

  let result = 'S3 did not run';

  await s3.putObject({
    Bucket: bucket,
    Key: keyName,
    Body: body,
  }, (err) => {
    if (err) {
      result = err;
    } else {
      result = 'Successfully saved object to ' + bucket + '/' + keyName;
    }
  }).promise();

  return result;
};
