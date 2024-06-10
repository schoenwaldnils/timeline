import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import { makeClient } from './makeClient'

export const { getClient } = registerApolloClient(() => makeClient(true))
