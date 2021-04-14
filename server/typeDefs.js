import { gql } from 'apollo-server';

const typeDefs = gql`
  type Show {
    id: ID!
    date: String!
    venue: Venue!
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
    author: [Songwriter]
    source: Source!
    tracks: [Track]
  }

  type Venue {
    id: ID!
    site: String!
    city: String!
    shows: [Show]
  }

  type Songwriter {
    id: ID!
    fullname: String!
    shortname: String!
    songs: [Song]
  }

  type Track {
    id: ID!
    song: Song!
    show: Show!
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
  }

  type Mutation {
    createShow(date: String!, venue: ID!): Show!
    createSong(title: String!, source: Source!): Song!
    createVenue(site: String!, city: String!): Venue!
  }
`

export default typeDefs;
