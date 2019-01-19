import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsDetailsActions } from "../ducks/playlistDetails";

export function* getPlayListsDetails(action) {
    try {
        const { data } = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

        yield put(PlaylistsDetailsActions.getPlaylistDetailsSuccess(data));
    } catch(e) {
        console.log(e);
    }
}