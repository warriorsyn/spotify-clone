import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlist";

import { getPlayLists } from "./playlist";

export default function* () {

    yield all([
        takeLatest(PlaylistTypes.GET_REQUEST, getPlayLists)
    ]);

}