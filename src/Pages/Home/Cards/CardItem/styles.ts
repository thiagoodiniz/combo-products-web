import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    box-shadow: ${({ theme }) => theme.commoms.boxShadow};
    overflow: hidden;
    border-radius: 0.5rem;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    & > .icon-box {
        width: 20%;
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            opacity: 0.9;
        }
    }

    & > .card-content {
        width: 80%;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 700;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }
`;
