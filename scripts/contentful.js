const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

async function getEntries(type) {
  const entries = [];
  let orderBy = '';

  switch (type) {
    case 'person':
      orderBy = 'fields.birth';
      break;
    case 'time':
      orderBy = 'fields.startYear';
      break;
    case 'event':
      orderBy = 'fields.year';
      break;
    default:
  }

  try {
    const res = await client.getEntries({
      content_type: type,
      select: 'sys.id',
      order: orderBy,
    });
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
    const res = await client.getEntries({ 'sys.id': id });
    const fields = res.items[0].fields;
    return fields;
  } catch (exception) {
    return console.error(exception);
  }
}

exports.client = client;
exports.getEntries = getEntries;
exports.getFields = getFields;
