import { createClient } from 'contentful'

const CONTENTFUL_SPACE_ID = '81noh8m93vcd'

const token = '8a320342ff838c8f3e85fdc93d40ae562ecc1d65744737c2b63624ef12d4b4a3'

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: token,
})

client.getEntries({
  content_type: 'person',
})
