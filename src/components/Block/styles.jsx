import styled from 'styled-components';

export const BlockContainer = styled.div`
        background: ${props => props.type ? "yellow" : "black"};
        color: ${props => props.type ? "black" : "white"};
        height: 50px;
        width: 80px;
        position: absolute;
        right: 8%;
        transform: ${props => props.type ? "translateY(33vh)" : "translateY(0)"};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.5rem;
`