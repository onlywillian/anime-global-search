import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100vw;

    h1 {
        text-align: center;
    }

    div {
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content center;
    }
`
export const HeaderInput = styled.input`
    outline: 0;
    width: 80%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px 20px;
`