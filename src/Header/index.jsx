import React from 'react';

import { HeaderContainer, HeaderInput } from './styles';

const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>Anime Global Search</h1>

            <div>
                <HeaderInput placeholder='Anime Name'/>
            </div>
        </HeaderContainer>
    );
}
 
export default Header;