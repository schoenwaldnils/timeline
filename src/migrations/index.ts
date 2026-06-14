import * as migration_20260613_000214_initial from './20260613_000214_initial'

export const migrations = [
  {
    up: migration_20260613_000214_initial.up,
    down: migration_20260613_000214_initial.down,
    name: '20260613_000214_initial',
  },
]
