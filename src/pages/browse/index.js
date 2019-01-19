import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { Creators as PlayListCreators } from "../../store/ducks/playlist";

import { Container, Title, List, Playlist } from "./style";

class Browse extends React.Component {

    componentDidMount() {
        this.props.getPlaylistRequest();  
    }


    render() {
        return (
            <Container>
                <Title>Navegar</Title>

                <List>
                    {this.props.playlists.data.map(items => (
                        <Playlist key={items.id} to={`/playlists/${items.id}`}>
                            <img src={items.thumbnail}   alt={items.title} />
                            <strong>{items.title}</strong>
                            <p>{items.description}</p>
                        </Playlist>
                    ))}
                </List>
            </Container>
        )
    }
}



const mapStateToProps = state => ({
    playlists: state.playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayListCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);