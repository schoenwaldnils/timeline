import styled from '@emotion/styled'
import { FC, MouseEventHandler, SVGProps } from 'react'

import { ReactComponent as SearchIcon } from './searchIcon.svg'

const IconContainer = styled.div`
  display: inline-block;
  padding: 0.225em;
`

const StyledIcon = ({ Icon }: { Icon: SvgrComponent }) => {
  const StIcon = styled(Icon)`
    > path {
      fill: currentColor;
    }
  `
  return <StIcon />
}

type IconProps = SVGProps<SVGSVGElement> & { icon: 'search' }

export const Icon: FC<IconProps> = ({ icon, ...props }) => {
  switch (icon) {
    case 'search':
      return <StyledIcon {...props} Icon={SearchIcon} />

    default:
      return null
  }
}

export const IconPadded: FC<
  IconProps & {
    onClick: MouseEventHandler<HTMLDivElement>
  }
> = ({ className, onClick, ...props }) => (
  <IconContainer className={className} onClick={onClick}>
    <Icon {...props} />
  </IconContainer>
)
