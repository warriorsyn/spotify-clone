import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { Creators as PlayListCreators } from "../../store/ducks/playlist";

import { Container, NewPlaylist, Nav } from "./style";

import Loading from "../loading";


import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends React.Component {

    componentDidMount() {
        this.props.getPlaylistRequest();  
    }

    render() {
        return (
            <Container>
                <div>
                    <Nav main>
                        <li>
                            <Link to="/">Navegar</Link>
                        </li>
                        <li>
                            <a href="">Rádio</a>
                        </li>
                    </Nav>
        
                     <Nav>
                         <li>
                             <span>Sua biblioteca</span>
                         </li>
                        <li>
                            <a href="">Seu daily mix</a>
                        </li>
                        <li>
                            <a href="">Músicas</a>
                        </li>
                        
                        <li>
                            <a href="">Álbums</a>
                        </li>
        
                        <li>
                            <a href="">Estações</a>
                        </li>
        
                        <li>
                            <a href="">Arquivos locais</a>
                        </li>
        
                        <li>
                            <a href="">Vídeos</a>
                        </li>
        
                        <li>
                            <a href="">Podcasts</a>
                        </li>
        
                    </Nav>
        
                    <Nav>
                        <li>
                            <span>PLAYLISTS</span><br />
                            {this.props.playlists.loading && <Loading />}
                        </li>
                        {this.props.playlists.data.map(item => (
                            <li key={item.id}>
                                <Link to={`/playlists/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </Nav>
        
                </div>
        
                <NewPlaylist>
                    <img src={AddPlaylistIcon}  alt="playlist" />
                    Nova playlist
                </NewPlaylist>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayListCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar) ;