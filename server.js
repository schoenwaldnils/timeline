const express = require('express');
const next = require('next');
const { client } = require('./scripts/contentful');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  const contentfulRes = await client.getEntries();

  // CUSTOM ROUTES GO HERE
  contentfulRes.items.map((item) => {
    if (item.sys.contentType.sys.id === 'page') {
      const { url } = item.fields;
      const { id } = item.sys;
      server.get(url, (req, res) => {
        const mergedQuery = Object.assign({}, req.query, req.params, { id });
        return app.render(req, res, '/page', mergedQuery);
      });
    }
    return true;
  });

  server.get('/page', (req, res) => {
    return app.render(req, res, '/page', req.query);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
