import { programResolvers } from './program/index.js';
import { residentResolvers } from './resident/index.js';

export const resolvers = {
  Query: {
      ...programResolvers.Query,
      ...residentResolvers.Query,
  },
}
