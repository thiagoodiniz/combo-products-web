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
        min-width: 2rem;
        min-height: 2rem;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            opacity: 0.75;
        }

        & img {
            width: 1rem;
        }
    }
`;

export const TagsContainer = styled.div`
    padding: 0.5rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.gray6};
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    & > div.tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12rem;
        background-color: ${({ theme }) => theme.colors.gray7};
        border: 1px solid ${({ theme }) => theme.colors.blue};
        padding: 0.25rem 0.25rem 0.25rem 0.75rem;
        border-radius: 1rem;

        & > span {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors.blue};
            font-weight: 600;
        }

        & > button {
            background: none;
            min-width: 0.25rem;
            color: ${({ theme }) => theme.colors.blue};
            height: 0.25rem;
            font-size: 0.675rem;
            font-weight: 700;
            text-transform: none;
        }
    }
`;