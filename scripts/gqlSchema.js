const gql = require('graphql-tag');

module.exports = gql`{
  personCollection(
    where: {
      startYear_exists: true,
      OR: [
        { endYear_exists: true },
        { stillActive: true }
      ]
    }
    order: [
      startYear_ASC,
      name_ASC
    ],
    limit: 1000,
  ) {
    items {
      sys {
        id
      }
      name,
      image {
        fileName,
        url
      },
      gender,
      startYear,
      startVagueness,
      endYear,
      endVagueness,
      stillActive,
      father {
        name
      },
      mother {
        name
      },
      childsCollection {
        items {
          name
        }
      }
    }
  },
  timeCollection(
    where: {
      startYear_exists: true,
    }
    order: [
      startYear_ASC, 
      name_ASC
    ],
    limit: 1000,
  ) {
    items {
      sys {
        id
      }
      name,
      startYear,
      endYear,
    }
  },
  eventCollection(
    where: {
      year_exists: true,
    }
    order: [
      year_ASC, 
      name_ASC
    ],
    limit: 1000,
  ) {
    items {
      sys {
        id
      }
      name,
      year,
    }
  }
}`;
