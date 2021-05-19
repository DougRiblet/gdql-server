import prisma from './db.js';

const resolvers = {
  Query: {
    show: (parent, args) => {
      return prisma.show.findUnique({
        where: { date: args.date },
      });
    },
    venue: (parent, args) => {
      return prisma.venue.findUnique({
        where: { id: args.id },
      });
    },
    venueBySiteCity: (parent, args) => {
      return prisma.venue.findUnique({
        where: {
          site_city: {
            site: args.site,
            city: args.city,
          },
        },
      });
    },
    song: (parent, args) => {
      return prisma.song.findUnique({
        where: { id: args.id },
      });
    },
    allsongs: (parent, args) => {
      return prisma.song.findMany({
        include: {
          writer: true,
        },
      });
    },
    allvenues: (parent, args) => {
      return prisma.venue.findMany();
    },
    songByTitle: (parent, args) => {
      return prisma.song.findFirst({
        where: {
          OR: [
            { title: args.title },
            { aka: { has: args.title } }
          ]
        },
      });
    },
  },
  Mutation: {
    createShow: (parent, args) => {
      return prisma.show.create({
        data: {
          date: args.show.date,
          setshape: {
            connect: {
              setmod: args.show.setshape,
            },
          },
          venue: {
            connectOrCreate: {
              where: { site_city: { site: args.show.site, city: args.show.city } },
              create: { site: args.show.site, city: args.show.city },
            },
          },
        },
      });
    },
    createVenue: (parent, args) => {
      return prisma.venue.create({
        data: {
          site: args.site,
          city: args.city,
        },
      });
    },
    createSong: (parent, args) => {
      let writerAdds = {};
      if (args.writer && args.writer.length > 0) {
        const wcc = args.writer.map(w => ({
          where: { fullname: w },
          create: { fullname: w }
        }));
        writerAdds = {
          writer: {
            connectOrCreate: wcc,
          }
        };
      }
      return prisma.song.create({
        data: {
          title: args.title,
          source: args.source,
          ...writerAdds
        },
      });
    },
    createTracks(parent, args) {
      return prisma.track.createMany({
        data: args.tracks,
      });
    },
  },
};

export default resolvers;
