import { FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

export const DateFormControlLabel = styled(FormControlLabel)`
    && {
        & > span {
            font-size: 0.875rem;
            color: ${props => props.theme.colors.blueDark };
            
        }
    }
`;
