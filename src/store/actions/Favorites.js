import get from 'services/get'
import post from 'services/post'
import remove from 'services/delete'

import {
  GET_FAVORITES,
  SET_FAVORITES
} from 'store/types'

export const GetFavorites = (content) => {
  return (dispatch) => {
    get(content.url, content.data).then((res) => {
      dispatch({
        type: GET_FAVORITES,
        payload: {
          favorites: res.data
        }
      })
    }).catch(err => {
      dispatch({
        type: GET_FAVORITES,
        payload: {
          favoritesError: err.toJSON()
        }
      })
    })
  }
}

export const SetFavorites = (content) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITES,
      payload: {
        favoritesResult: '',
        favoritesError: '',
        favoriteInProgress: true
      }
    })

    post(content.url, content.data).then((res) => {
      dispatch({
        type: SET_FAVORITES,
        payload: {
          favoritesResult: {
            status: res.status,
            data: res.data
          },
          newFavorite: res.data,
          favoriteInProgress: false
        }
      })
    }).catch(err => {
      dispatch({
        type: SET_FAVORITES,
        payload: {
          favoritesError: err.toJSON(),
          favoriteInProgress: false
        }
      })
    })
  }
}

export const RemoveFavorites = (content) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITES,
      payload: {
        favoritesResult: '',
        favoritesError: '',
        favoriteInProgress: true
      }
    })

    remove(content.url).then((res) => {
      dispatch({
        type: SET_FAVORITES,
        payload: {
          favoritesResult: {
            status: res.status,
            data: res.data
          },
          favoritesError: '',
          newFavorite: res.data,
          favoriteInProgress: false
        }
      })
    }).catch(err => {
      dispatch({
        type: SET_FAVORITES,
        payload: {
          favoritesError: err.toJSON(),
          favoriteInProgress: false
        }
      })
    })
  }
}

export const RemoveFavoritesResult = (content) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITES,
      payload: {
        favoritesResult: '',
        favoritesError: ''
      }
    })
  }
}
