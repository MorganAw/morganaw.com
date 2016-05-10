export default function useRoutes(server, router) {
  router.use('/', (req, res) => {
    res.render('index.pug');
  });

  server.use(router);
}