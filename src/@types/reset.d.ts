/* eslint-disable no-unused-vars */
// borrowed from
// https://github.com/total-typescript/ts-reset/blob/main/src/entrypoints/utils.d.ts
// https://github.com/total-typescript/ts-reset/blob/main/src/entrypoints/filter-boolean.d.ts

declare namespace TSReset {
  type NonFalsy<T> = T extends false | 0 | '' | null | undefined | 0n ? never : T

  type WidenLiteral<T> = T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends bigint
          ? bigint
          : T extends symbol
            ? symbol
            : T
}

interface Array<T> {
  filter(predicate: BooleanConstructor, thisArg?: unknown): TSReset.NonFalsy<T>[]
}

interface ReadonlyArray<T> {
  filter(predicate: BooleanConstructor, thisArg?: unknown): TSReset.NonFalsy<T>[]
}
