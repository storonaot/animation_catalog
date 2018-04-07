import serials from './serials'
import countries from './countries'
import directors from './directors'
import studios from './studios'
import seasons from './seasons'
import translations from './translations'
import languages from './languages'

console.log('translations', translations)

export default {
  ...serials,
  ...countries,
  ...directors,
  ...studios,
  ...seasons,
  ...translations,
  ...languages
}
