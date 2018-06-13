import express from 'express';
import next from 'next';
import { serverPathMap } from './scripts/contentful';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  // CUSTOM ROUTES GO HERE
  (await serverPathMap).forEach(({ url, id, type }) => {
    console.log({ url, id, type });
    server.get(url, (req, res) => {
      return app.render(req, res, `/${type}`, { id });
    });
  });

  server.get('/page', (req, res) => {
    return app.render(req, res, '/page', req.query);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
