import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;

    & > hr {
        width: 22rem;
    }

    & .MuiFormGroup-row .MuiFormControlLabel-label {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.blueDark};
    }
`;
