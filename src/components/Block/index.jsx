import { AnimeInfo } from '../AnimesList/styles';
import { BlockContainer } from './styles';

const Block = ({ children, type }) => {
    return ( 
        <>
            {type ? 
                <BlockContainer type>
                    {children == null ? '?' : children}
                </BlockContainer>
                :
                <BlockContainer>
                    {children == null ? '?' : children}
                </BlockContainer>
            }
        </>
     );
}
 
export default Block;