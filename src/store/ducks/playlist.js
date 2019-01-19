/**
 * Types
 */

export const Types = {
    GET_REQUEST: 'playlist/GET_REQUEST',
    GET_SUCCESS: 'playlist/GET_SUCCESS'
}

/**
 * Reducers
 */

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {
        case Types.GET_REQUEST:
            return {...state, loading: true};
        case Types.GET_SUCCESS:
            return {...state, loading: false, data: action.payload.data}
        default:
         return state;
    }
}

/**
 * Action Creators
 */

export const Creators = {
    getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),

    getPlaylistSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data }
    })
}