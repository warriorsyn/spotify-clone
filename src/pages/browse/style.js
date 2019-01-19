import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`

    flex: 1;
    margin-top: 110px;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
    font-size: 48px;    
`;

export const List = styled.div`

    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    
    /* z-index: 1; */
`;

export const Playlist = styled(Link)`

    display: flex;
    flex-direction: column;
    padding: 0 10px;
    text-decoration: none;
    flex: 0 0 100%;
    margin-bottom: 1rem;

    @media (min-width: 460px) {
        flex: 0 0 calc(50% - 1rem);
    }

    @media (min-width: 768px) {
        flex: 0 0 calc(25% - 1rem);
    }

    img {
        height: 250px;
    }

    strong {
        font-size: 13px;
        margin-top: 10px;
        color: white;   
    }

    
    p {
        line-height: 22px;
        margin-top: font-size: 13px;
        color: #b3b3b3;
    }


    &:hover img {
         opacity: 0.4;
    }

    &:first-child {
        margin: 0;
    }

`