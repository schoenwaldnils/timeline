const cfGraphql = require('./gql/cfGraphql')
const query = require('./gql/gqlSchema')

module.exports = async intl => {
  const data = await cfGraphql(query(intl))
  return data
}
