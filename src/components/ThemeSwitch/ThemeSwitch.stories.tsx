import { ThemeSwitch, ThemeSwitchProps } from './ThemeSwitch'

export default {
  title: 'Theme Switch',
  component: ThemeSwitch,
  argTypes: { toggleTheme: { action: 'toggle theme' } },
}

export const theme_switch = (props: ThemeSwitchProps) => <ThemeSwitch {...props} />
