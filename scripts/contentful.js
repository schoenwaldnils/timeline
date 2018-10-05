import { createClient } from 'contentful';
import paramCase from 'param-case';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

export async function getEntries(type) {
  const entries = [];
  let order;
  let select = 'sys.id';

  switch (type) {
    case 'person':
      order = 'fields.startYear';
      select = 'sys.id,fields.name';
      break;
    case 'time':
      order = 'fields.startYear';
      break;
    case 'event':
      order = 'fields.year';
      break;
    default:
  }

  try {
    const res = await client.getEntries({
      content_type: type,
      select,
      order,
    });

    res.items.forEach((item) => {
      let entry = {
        id: item.sys.id,
      };

      if (type === 'person') {
        entry = {
          id: item.sys.id,
          url: `/personen/${paramCase(item.fields.name)}`,
          type,
        };
      }
      entries.push(entry);
    });
  } catch (exception) {
    console.error(exception);
  }
  return entries;
}

export async function getFields(id) {
  try {
    const res = await client.getEntries({
      'sys.id': id,
    });
    const entryFields = res.items[0].fields;
    return entryFields;
  } catch (exception) {
    return console.error(exception);
  }
}

export default client;
