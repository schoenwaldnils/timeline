type SvgrUrl = React.StatelessComponent<React.SVGAttributes<SVGElement>>

type SvgrComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

declare module '*.svg' {
  export const ReactComponent: SvgrComponent
  const value: SvgrUrl
  export default value
}

// type UnionToIntersection<U> = (
//  U extends unknown ? (k: U) => void : never
// ) extends (k: infer I) => void
//   ? I
//   : never
