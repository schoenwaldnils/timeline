interface SvgrUrl
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

interface SvgrComponent
  extends React.FunctionComponent<React.SVGProps<SVGSVGElement>> {}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: SvgrComponent
  const value: SvgrUrl
  export default value
}
