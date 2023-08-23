type SvgrUrl = React.StatelessComponent<React.SVGAttributes<SVGElement>>

type SvgrComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

declare module '*.svg' {
  export const ReactComponent: SvgrComponent
  const value: SvgrUrl
  export default value
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}

// type UnionToIntersection<U> = (
//   U extends unknown ? (k: U) => void : never
// ) extends (k: infer I) => void
//   ? I
//   : never
