import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    img {
        width: 250px;
        height: 250px;
    }

    div {
        margin-left: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.11px;
        font-weight: 300;
    }

    h1 {
        margin-top: 10px;
        font-size: 48px;
    }

    p {
        margin-top: 0;
        color: #b3b3b3;
        font-size: 11px;
        letter-spacing: 1.11px;
        text-transform: uppercase;
    }

    button {
        background: #1db854;
        border: 0;
        margin-top: 10px;
        padding: 0 35px;
        color: white;
        border-radius: 16px;
        height: 32px;
        line-height: 32px;
        letter-spacing: 1.11px;

        &:hover {
            transform: scale(1.1);
            background: #1dde61;
            transition: .4s;
            cursor: pointer;
        }
    }
`;

export const Songlist = styled.table`

    width: 100%;
    text-align: left;
    margin-top: 20px;

    thead th {
        font-size: 11px;
        letter-spacing: 1.11px;
        color: #b3b3b3;
        text-transform: uppercase;
        padding:5px 10px;
        font-weight: normal; 

        &:last-child{
            text-align: right;
        }

    }

    tbody td {
        border-top: 1.5px solid #282828;
        font-size: 13px;
        padding: 0 10px;
        line-height:40px;
        
        &:first-child {
            width: 80px;
            text-align: right;
        }
        
        &:last-child {
            text-align: right;
        }
    }


    tbody tr:hover td {
        background: #282828;
    }
`;