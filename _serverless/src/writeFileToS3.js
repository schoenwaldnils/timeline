const S3 = require('aws-sdk/clients/s3');
const CloudFront = require('aws-sdk/clients/cloudfront');


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

const cloudfront = new CloudFront({ apiVersion: '2019-03-26' });

function getKeyName(folder, filename) {
  return folder + '/' + filename;
}

async function invalidateCloudFront() {
  return cloudfront.createInvalidation({
    DistributionId: 'E22UXDDPQ7XQ5A', // cdn.schoen.world
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1, /* required */
        Items: [
          '/',
        ],
      },
    },
  }, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response  });
  });
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
  }, async (err) => {
    if (err) {
      result = err;
    } else {
      result = 'Successfully saved object to ' + bucket + '/' + keyName;
    }
  }).promise();

  if (result.startsWith('Success')) {
    await invalidateCloudFront();
  }

  return result;
};

