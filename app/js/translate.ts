import translations from '../data/translations'
import { useStore } from '../components/Store'

export const T = (id: string): string => {
  const [state] = useStore()
  const selectors = id.split('.')
  let string = translations
  selectors.forEach(selector => {
    string = string[selector]
  })

  return string[state.lang]
}
