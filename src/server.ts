import getServer from './app';

const PORT: number | string = process.env.PORT || 4000;

getServer().then(({ app, server }) =>
  app.listen(PORT, () => console.log(`Movie.log Backend Server Running: http://localhost:${PORT}${server.graphqlPath}`))
);
