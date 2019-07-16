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

module.exports = async (intl) => {
  const folder = 'timelineData';
  const filename = `timelineData-${intl}.json`;
  const keyName = getKeyName(folder, filename);

  const data = await s3.getObject({
    Bucket: bucket,
    Key: keyName,
  }, (err) => {
    if (err) {
      console.log(err);
    }
  }).promise();

  const result = data.Body.toString();

  return result;
};
