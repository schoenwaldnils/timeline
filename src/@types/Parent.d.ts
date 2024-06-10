export type Parent = Pick<CPerson, 'sys' | 'gender'> & {
  nameDE: string
  nameEN: string
}
