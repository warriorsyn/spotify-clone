import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlist";
import { Types as PlaylistDetailsTypes } from "../ducks/playlistDetails";

import { getPlayLists } from "./playlist";
import { getPlayListsDetails } from "./playlistDetails";

export default function* () {

    yield all([
        takeLatest(PlaylistTypes.GET_REQUEST, getPlayLists),
        takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlayListsDetails)
    ]);

}