import { currentlocale } from '../components/ContextLang'
import translations from '../data/translations'

export default id => {
  const selectors = id.split('.')
  let string = translations
  selectors.forEach(selector => {
    string = string[selector]
  })

  return string[currentlocale()]
}
