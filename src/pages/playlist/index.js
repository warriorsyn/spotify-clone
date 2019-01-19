import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as PlayListDetailsCreators } from "../../store/ducks/playlistDetails";

import { Container, Header, Songlist } from "./style";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";
import Loading from "../../components/loading";

class Playlist extends React.Component {

    componentDidMount() {
        this.loadPlaylistDetails();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPlaylistDetails();
        }
    }

    loadPlaylistDetails = () => {
        let { id } = this.props.match.params;

        this.props.getPlaylistDetailsRequest(id);
    }

    renderDetails = () => {
        
        const playlist = this.props.playlistDetails.data;
        
        return (
            <Container>
            <Header>
                <img src={playlist.thumbnail}  alt={playlist.title} />

                <div>
                    <span>PLAYLIST</span>
                    <h1>{playlist.title}</h1>
                    {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

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
                    {!playlist.songs ? (
                        <td colspan={5}>Nenhuma música nessa playlist</td>
                    ) : playlist.songs.map(song => (
                        <tr key={song.id}>
                            <td><img src={PlusIcon} alt="adicionar"/></td>
                            <td>{song.title}</td>
                            <td>{song.author}</td>
                            <td>{song.album}</td>
                            <td>4:26</td>
                        </tr>
                    )) 
                    
                    }
                 
                </tbody>
            </Songlist>
        </Container>
        )
}

    render() {
    
        return this.props.playlistDetails.loading ? (
            <Container loading>
                <Loading />
            </Container>
            ) : (
                this.renderDetails()
            )
    }
}


const mapStateToProps = state => ({
    playlistDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayListDetailsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);