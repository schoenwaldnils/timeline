import React from 'react';
import { getFields } from '../scripts/contentful';
import { timeperiod } from '../app/js/utils';
import marked from '../app/js/marked';

import '../app/css/index.css';

import PagePerson from '../app/components/PagePerson/PagePerson';

const NextPage = (fields) => {
  return <PagePerson {...fields} />;
};

NextPage.getInitialProps = async ({ query: { id } }) => {
  const fields = await getFields(id);
  if (fields.image) {
    const image = fields.image.fields.file.url;
    delete fields.image;
    fields.image = image;
  }

  if (fields.birth) {
    fields.age = timeperiod(
      fields.birth,
      fields.death || new Date().getFullYear(),
    );
  }

  if (fields.father) {
    const father = fields.father.fields.name;
    delete fields.father;
    fields.father = father;
  }

  if (fields.mother) {
    const mother = fields.mother.fields.name;
    delete fields.mother;
    fields.mother = mother;
  }

  if (fields.children) {
    const children = fields.children.map(mapChildren => mapChildren.fields.name);
    delete fields.children;
    fields.children = children.sort();
  }

  if (fields.content) {
    const content = marked(fields.content);
    delete fields.content;
    fields.content = content;
  }
  return fields;
return fields;
};

export default NextPage;
