import React from 'react';

import { HeaderContainer, HeaderInput } from './styles';

const Header = ({handleAnimeQuery}) => {
    let a = "";

    return ( 
        <HeaderContainer>
            <h1>Anime Global Search</h1>

            <div>
                <HeaderInput placeholder='Anime Name' onKeyDown={e => handleAnimeQuery(e)}/>
            </div>
        </HeaderContainer>
    );
}
 
export default Header;