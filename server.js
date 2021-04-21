import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const port = process.env.PORT || 8246;

new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`),
);
