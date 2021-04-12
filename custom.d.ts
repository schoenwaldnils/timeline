type SvgrUrl = React.StatelessComponent<React.SVGAttributes<SVGElement>>

type SvgrComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

declare module '*.svg' {
  export const ReactComponent: SvgrComponent
  const value: SvgrUrl
  export default value
}
