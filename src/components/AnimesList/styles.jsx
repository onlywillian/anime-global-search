import styled from 'styled-components';

export const AnimeListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
export const AnimeInfo = styled.div`
    width: 80%;
    min-height: 35vh;
    background: #F6F5F5;
    margin-top: 50px;
    display: flex;

    img {
        background: black;
        width: 15%;
        height: 100%;
    }

    div.score {
        background: yellow;
        color: black;
        height: 50px;
        width: 80px;
        position: absolute;
        right: 8%;
        transform: translateY(33vh);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.5rem;
    }

    div.wrapper {
        margin-left: 50px;
        height: 35vh;
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 2.5rem;

            a {
                text-decoration: none;
                color: black;
            }
        }

        p {
            font-size: clamp(1.3rem, 1.5rem, 3vw);
            height: 100%;

            display: block;
            overflow: hidden; // Removendo barra de rolagem
            text-overflow: ellipsis; // Adicionando "..." ao final
            display: -webkit-box;
            -webkit-line-clamp: 4; // Quantidade de linhas
            -webkit-box-orient: vertical; 
        }

        .cats-container {
            display: flex;
            width: 100%;
            gap: 5rem
        }
    }

`

export const Cat = styled.div`
    background: white;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 1.4rem;
`