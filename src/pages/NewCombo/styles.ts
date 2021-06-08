import styled from 'styled-components';

export const Container = styled.div`
    margin: 5rem auto 1rem auto;
    max-width: ${({ theme }) => theme.breakpoints.laptopL};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.commoms.boxShadow};
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    @media(min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        padding: 1rem 1.5rem;
    }

    & > h2 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }
`;

export const NewComboForm = styled.form`
    display: flex;
    flex-direction: column;

    & > .form-input {
        margin: 0.5rem 0;
        max-width: 20rem;

        & input {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.blueDark};
        }
    }
`;
