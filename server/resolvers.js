import prisma from './db.js';

const resolvers = {
  Query: {
    show: (parent, args) => {
      return prisma.show.findUnique({
        where: { date: args.date },
      })
    },
    venue: (parent, args) => {
      return prisma.venue.findUnique({
        where: { id: args.id },
      })
    },
    song: (parent, args) => {
      return prisma.song.findUnique({
        where: { id: args.id },
      })
    },
  },
  Mutation: {
    createShow: (parent, args) => {
      return prisma.show.create({
        data: {
          date: args.date,
          venue: { connect: { id: args.venueId} }
        },
      })
    },
    createVenue: (parent, args) => {
      return prisma.venue.create({
        data: {
          site: args.site,
          city: args.city,
        },
      })
    },
    createSong: (parent, args) => {
      return prisma.song.create({
        data: {
          title: args.title,
          source: args.source,
        },
      })
    },
  },
};

export default resolvers;
