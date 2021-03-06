import { GET_FAVORITES, SET_FAVORITES } from '../types'

const INITIAL_STATE = {
  favorites: '',
  favoritesError: '',
  favoritesResult: '',
  newFavorite: '',
  favoriteInProgress: false
}

const favorites = (state = INITIAL_STATE, action: any) => {
  const { payload } = action
  switch (action.type) {
    case GET_FAVORITES: {
      return {
        ...state,
        favorites: payload.favorites,
        favoritesError: payload.favoritesError
      }
    }
    case SET_FAVORITES: {
      return {
        ...state,
        newFavorite: payload.newFavorite,
        favoriteInProgress: payload.favoriteInProgress,
        favoritesError: payload.favoritesError,
        favoritesResult: payload.favoritesResult
      }
    }
    default:
      return state
  }
}

export default favorites
