'use strict';

const getContentfulData = require('./src/getContentfulData');
const formatData = require('./src/formatData');
const writeFileToS3 = require('./src/writeFileToS3');
const readFileFromS3 = require('./src/readFileFromS3');

module.exports.updateTimelineData = async () => {
  const languages = ['de', 'en'];
  const message = {};

  await Promise.all(languages.map(async (lang) => {
    const data = await getContentfulData(lang);
    const formatedData = await formatData(data, lang);
    const result = await writeFileToS3(formatedData, lang);
    message[lang] = result;
  }));

  return {
    statusCode: message.de && message.en ? 200 : 500,
    body: JSON.stringify({ message }, null, 2),
  };
};

module.exports.getTimelineData = async (event) => {
  console.log(event);
  let language = 'en';
  if (event.queryStringParameters && event.queryStringParameters.lang) {
    language = event.queryStringParameters.lang;
  }
  const result = await readFileFromS3(language);

  return {
    statusCode: result ? 200 : 500,
    body: result,
    headers: {
      'access-control-allow-origin': event.headers.origin,
      'access-control-allow-credentials': true,
    },
  };
};
