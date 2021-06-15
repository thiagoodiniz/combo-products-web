import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    width: 22rem;
    border: 1px dashed ${({ theme }) => theme.colors.gray6};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;

    & > p {
        font-size: 0.875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray5};
    }

    & > span.error {
        font-size: 0.75rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.red};
        margin-top: 0.5rem;
    }

    & > span.filename {
        font-size: 0.675rem;
        margin-top: 0.5rem;
        font-style: italic;
        color: ${({ theme }) => theme.colors.gray5};

    }
`;

export const SelectFileButton = styled(Button)`
    && {
        min-width: 1.25rem;
        height: 1.5rem;
        padding: 0.5rem 2rem;
        margin: 1rem 0;
        text-transform: none;
        font-size: 0.75rem;
        align-self: center;

        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};
            opacity: 0.75;
        }
    }
`;

export const ImgUploadedPreviewContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;

    & > div.img-preview {
        height: 100%;
        width: 5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray6};
        padding: 0.25rem;
        
        & > img {
            width: 100%;
            height: 100%;
            height: 4.5rem;
        }

    }

    & > p {
        font-size: 0.875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray5};
        text-align: center;
        margin: auto;
    }
`;
