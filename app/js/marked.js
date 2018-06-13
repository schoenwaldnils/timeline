import React from 'react';
import marked from 'marked';
// import { renderToString } from 'react-dom/server';
// import { HTML as decodeHTML } from 'entities/lib/decode';

// const renderer = new marked.Renderer();

// renderer.image = (href, title, text) => {
//   const src = decodeHTML(href).split(/[?|#]/);
//   const params = src[1] && qs.parse(src[1]);
//   const options = src[2] && qs.parse(src[2]);
//   return renderToString(<Picture
//     imageSrc={src[0]}
//     imageAlt={text}
//     title={title}
//     width={params.w && parseInt(params.w, 10)}
//     float={options.float} />);
// };

export default function (string) {
  return marked(string);
  // return marked(string, { renderer });
}
