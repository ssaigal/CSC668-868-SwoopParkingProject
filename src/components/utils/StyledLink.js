/** StyledLink.js
 * Swoop
 * Created by Alaric Gonzales
 * Fix for unwanted text decoration for links
 */
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export {StyledLink}