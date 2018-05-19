/** StyledLink.js
 * Swoop
 * Created by Alaric Gonzales
 * Fix for unwanted text decoration for links
 */
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ff5252;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export {StyledLink}