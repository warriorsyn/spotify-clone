import React from "react";
import { Container, Search, User } from "./style";
const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>

        <User>
            <img src="https://avatars2.githubusercontent.com/u/39230805?v=4" alt="avatar" />
            Joao Victor
        </User>
    </Container>
)   

export default Header;