const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

async function getEntries(type) {
  const entries = [];

  try {
    const res = await client.getEntries({
      content_type: type,
      select: 'sys.id',
    });
    console.log(res);
    res.items.map((item) => {
      entries.push(item.sys.id);
      return true;
    });
  } catch (exception) {
    return console.error(exception);
  }

  return entries;
}

async function getFields(id) {
  try {
    const res = await client.getEntry(id);
    const fields = res.fields;
    return fields;
  } catch (exception) {
    return console.error(exception);
  }
}

exports.client = client;
exports.getEntries = getEntries;
exports.getFields = getFields;
