import { Config } from 'payload'

import { configEvent } from './configEvent'
import { configMedia } from './configMedia'
import { configPerson } from './configPerson'
import { configTime } from './configTime'
import { configUser } from './configUser'

export const collections: Config['collections'] = [
  configMedia,
  configEvent,
  configTime,
  configPerson,
  configUser,
]
