import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ConfirmButton = styled(Button)`
    && {
        background-color: ${({ theme }) => theme.colors.green};

        &:hover {
            background-color: ${({ theme }) => theme.colors.green};
            opacity: 0.8;
        }
    }
`;