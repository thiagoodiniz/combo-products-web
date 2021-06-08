import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0.5rem 0;
    
    & > .gpd-item-field {
        width: 10rem;
        
        &:not(:last-child) {
            margin-right: 2rem;
        }

        & input {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.blueDark};
        }
    }
`;

export const AddGPDButton = styled(Button)`
    && {
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 50%;
        min-width: 0.5rem;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            opacity: 0.75;
        }

        & img {
            width: 1rem;
        }
    }
`;