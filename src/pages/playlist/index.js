import React from "react";

import { Container, Header, Songlist } from "./style";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
    <Container>
        <Header>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"   alt="current song" />

            <div>
                <span>PLAYLIST</span>
                <h1>Rock forever</h1>
                <p>13 músicas</p>

                <button>PLAY</button>
            </div>
        </Header>

        <Songlist cellPadding={0} cellSpacing={0}>
            <thead>
                <th />
                <th>Título</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th><img src={ClockIcon} alt="duração" /></th>
            </thead>

            <tbody>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linking Park</td>
                    <td>Hybrid Theory</td>
                    <td>4:26</td>
                </tr>

                <tr>
                    <td><img src={PlusIcon} alt="adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linking Park</td>
                    <td>Hybrid Theory</td>
                    <td>4:26</td>
                </tr>

                <tr>
                    <td><img src={PlusIcon} alt="adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linking Park</td>
                    <td>Hybrid Theory</td>
                    <td>4:26</td>
                </tr>

                <tr>
                    <td><img src={PlusIcon} alt="adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linking Park</td>
                    <td>Hybrid Theory</td>
                    <td>4:26</td>
                </tr>
            </tbody>
        </Songlist>
    </Container>
)

export default Playlist;