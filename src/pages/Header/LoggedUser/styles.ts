import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
`;

export const UserButton = styled(Button)`
    && {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
        text-transform: none;
        margin: 0 0.5rem;
    }
`;

export const BottomArrow = styled.img`
    transform: rotate(-90deg);
    margin-left: 0.5rem;
`;
