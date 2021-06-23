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
        
        & .MuiSelect-selectMenu {
            color: ${({ theme }) => theme.colors.blueDark};
            font-size: 0.875rem;
        }

    }
`;

export const AddItemButton = styled(Button)`
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

        &:disabled {
            opacity: 0.3;
        }
    }
`;

export const TagsContainer = styled.div`
    padding: 0.5rem 0.75rem 0 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.gray6};
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    
    & > div.tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 3rem;
        height: 1.75rem;
        background-color: ${({ theme }) => theme.colors.gray7};
        border: 1px solid ${({ theme }) => theme.colors.blue};
        padding: 0.25rem 0.25rem 0.25rem 0.75rem;
        border-radius: 1rem;
        margin: 0 1rem 0.5rem 0;

        &:hover {
            opacity: 0.9;
        }

        animation: opacity 0.25s ease-in;
        @keyframes opacity {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        &.remove-tag {
            animation: removeOpacity 0.5s ease-out;
            @keyframes removeOpacity {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        }

        & > span {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors.blue};
            font-weight: 500;
        }

        & > button {
            background: none;
            min-width: 0.25rem;
            width: 0.25rem;
            color: ${({ theme }) => theme.colors.blue};
            height: 0.25rem;
            font-size: 0.75rem;
            text-transform: none;
            margin: 0 0.25rem;

            &:hover {
                font-weight: 700;
            }
        }
    }
`;