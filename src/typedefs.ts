export const typeDefs = `#graphql

  type Attendee {
      userId: String
  }

  type Program {
      id: String,
      name: String,
      start: String,
      end: String,
      mode: String,
      dimensions: String,
      facilitators: String,
      hobbies: String,
      levelsOfCare: String,
      attendees: [Attendee]
  }

  type Resident {
      userId: String,
      name: String,
      gender: String,
      birthday: String,
      moveInDate: String,
      levelOfCare: String,
      hobbies: String,
      roomNumber: String,
      programs: [Program]

  }

  type Query {
    residents: [Resident]
    resident(id: String, limit: Int): Resident
    programs: [Program]
  }
`;
