import { gql } from 'apollo-server';

const typeDefs = gql`
  type Show {
    id: ID!
    date: String!
    venue: Venue!
    venueId: String!
    setlist: [Track]
    note: [String]
    tuning: [String]
    theme: [String]
    guest: [String]
  }

  type Song {
    id: ID!
    title: String!
    aka: [String]
    writer: [Songwriter]
    source: Source!
    played: [Track]
  }

  type Venue {
    id: ID!
    site: String!
    city: String!
    school: String
    shows: [Show]
  }

  type Songwriter {
    id: ID!
    fullname: String!
    shortname: String
    songs: [Song]
  }

  type Track {
    id: ID!
    song: Song!
    songTitle: String!
    show: Show!
    showDate: String!
    position: String!
    arrow: Boolean
    reprise: Boolean
  }

  enum Source {
    ORIGINAL
    COVER
    TRADITIONAL
  }

  type Query {
    show(date: String!): Show
    venue(id: ID!): Venue
    song(id: ID!): Song
    allsongs: [Song!]!
    allvenues: [Venue!]!
    songByTitle(title: String!): Song
  }

  type Mutation {
    createShow(date: String!, venueId: ID!): Show!
    createSong(title: String!, source: Source!, writer: [String]): Song!
    createVenue(site: String!, city: String!): Venue!
  }
`

export default typeDefs;
