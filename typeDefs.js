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
    setshape: Setshape
    shape: String
    archtop: String
    album: [Album]
  }

  type Setshape {
    id: ID!
    setmod: String!
    comment: String
    shows: [Show]
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

  type Album {
  id: ID!
  title: String!
  short: String!
  released: String!
  shows: [Show]
}

  enum Source {
    ORIGINAL
    COVER
    TRADITIONAL
  }

  input CreateTrackInput {
    songTitle: String!
    showDate: String!
    position: String!
    arrow: Boolean!
    reprise: Boolean
  }

  input CreateShowInput {
    date: String!
    site: String!
    city: String!
    shape: String!
  }

  input CreateAlbumInput {
    title: String!
    short: String!
    released: String!
    shows: [String]
  }

  type CreateTracksPayload {
    count: Int!
  }

  type Query {
    show(date: String!): Show
    venue(id: ID!): Venue
    song(id: ID!): Song
    allsongs: [Song!]!
    allvenues: [Venue!]!
    songByTitle(title: String!): Song
    venueBySiteCity(site: String!, city: String!): Venue
  }

  type Mutation {
    createShow(show: CreateShowInput!): Show!
    createSong(title: String!, source: Source!, writer: [String]): Song!
    createVenue(site: String!, city: String!): Venue!
    createTracks(tracks: [CreateTrackInput]!): CreateTracksPayload!
    createAlbum(album: CreateAlbumInput!): Album!
  }
`

export default typeDefs;
