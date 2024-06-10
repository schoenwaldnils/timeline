import { ReactComponent as IconSvg } from './icon.svg'
import css from './Logo.module.css'
import { ReactComponent as LogoSvg } from './logo.svg'

export const Logo = () => {
  return (
    <div className={css.Logo}>
      <IconSvg className={css.Logo_svg__icon} />
      <LogoSvg className={css.Logo_svg__logo} />
    </div>
  )
}
