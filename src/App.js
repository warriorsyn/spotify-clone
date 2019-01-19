import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Provider } from "react-redux";


import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Header from "./components/header";
import store from "./store";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
    
        <Provider store={store}>
          <BrowserRouter>
            <Wrapper>
              <GlobalStyle />
              <Container>
              <Sidebar />
              <PerfectScrollbar style={{backgroundColor: 'transparent', width: "100%", height: "100%"}}>
                  <Content>
                    <Header />
                    <Routes />
                  </Content>
              </PerfectScrollbar>
              </Container>
              <Player />
            </Wrapper>
          </BrowserRouter>
        </Provider>
      
    );
  }
}

export default App;
