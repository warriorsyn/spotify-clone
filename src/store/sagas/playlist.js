import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsActions } from "../ducks/playlist";

export function* getPlayLists() {
    try {
        const { data } = yield call(api.get, '/playlists');

        yield put(PlaylistsActions.getPlaylistSuccess(data));
    } catch(e) {
        console.log(e);
    }
}