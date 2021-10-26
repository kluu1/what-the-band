import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './resolvers';
import fs from 'fs';

const typeDefs = fs.readFileSync('./src/schema.graphql', 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context, express }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  }),
});

export const handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: true,
    },
  },
});
