// import { directorsFormatter } from 'utils/formatter'
import { FETCH_SEASON_DONE } from 'constants/actions'

const defaultState = null

// const formattedResult = (result) => {
//   const { directors } = result
//   const formattedDirectors = directorsFormatter(directors)
//   return { ...result, directors: formattedDirectors }
// }

export default function season(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SEASON_DONE:
      return state
    default:
      return state
  }
}
